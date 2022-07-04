<template>
    <canvas class="fov-canvas" ref="fovCanvas"></canvas>
    <div class="layout text-base overflow-visible w-full" ref="layout" @mousemove="mousemove" :class="{ blurry: blurry }">
        <slot></slot>
    </div>
</template>

<script lang="ts">
let mouseEvent;
let fovCanvas;
let ctx;
let layout;
let propsExternal;
let fovPatternImg;

import { toRefs, toRef } from 'vue'
import fovPatternImgUrl from '../assets/fovpattern.png'

export default {
    data() {
        return {
        }
    },
    props: {
        blurry: Boolean,
        showReducedFov: Boolean,
        showCentralFovLoss: Boolean,
        showOtherFovLoss: Boolean
    },
    methods: {
        mousemove(event) {
            mouseEvent = event;
        },
        renderWhenEnabled() {
            if(this.showReducedFov || this.showCentralFovLoss || this.showOtherFovLoss) {
                startRendering();
            } else {
                stopRendering();
            }
        }
    },
    mounted() {
        initCanvas(this.$refs.fovCanvas, this.$refs.layout);
    },
    watch: {
        showReducedFov() {
            this.renderWhenEnabled();
        },
        showCentralFovLoss() {
            this.renderWhenEnabled();
        },
        showOtherFovLoss() {
            this.renderWhenEnabled();
        }
    },
    setup(props) {
        propsExternal = toRefs(props);
    }
};

function initCanvas(fovCanvasRef, layoutRef) {
    fovCanvas = fovCanvasRef;
    ctx = fovCanvas.getContext('2d');
    layout = layoutRef;

    fovPatternImg = new Image();
    fovPatternImg.src = fovPatternImgUrl;
}

let rendering = false;

function drawCircle(obj) {
    obj.ctx.beginPath();
    obj.ctx.arc(obj.x, obj.y, obj.radius, 0, 2 * Math.PI, false);
    if (obj.fill) {
        obj.ctx.fillStyle = obj.fill;
        obj.ctx.fill();
    }
    if (obj.stroke) {
        obj.ctx.lineWidth = obj.strokeWidth;
        obj.ctx.strokeStyle = obj.stroke;
        obj.ctx.stroke();
    }
}

function renderCanvas() {
            fovCanvas.height = fovCanvas.clientHeight;
            fovCanvas.width = fovCanvas.clientWidth;
            ctx.fillStyle = 'black';

            let fovRadius = fovCanvas.width/4.5;

            // In the case that both central fov loss and outer fov loss are shown
            // is shown, make the outer fov a bit bigger 
            if(propsExternal.showCentralFovLoss.value) {
                fovRadius = fovCanvas.width/3
            }

            ctx.clearRect(0, 0, fovCanvas.width, fovCanvas.height);

            if(propsExternal.showReducedFov.value) {
                ctx.fillRect(0,0,fovCanvas.width, fovCanvas.height);
            }

            ctx.filter = 'blur(60px)';

            ctx.globalCompositeOperation = "destination-out"

            if (mouseEvent) {
                if(propsExternal.showReducedFov.value) {
                    drawCircle({
                            ctx,
                        x: mouseEvent.clientX,
                        y: mouseEvent.clientY,
                        radius: fovRadius,
                        fill: "black"
                    });
                }
            }

            ctx.globalCompositeOperation = "destination-over"

            if(propsExternal.showCentralFovLoss.value) {
                drawCircle({
                    ctx,
                    x: mouseEvent.clientX,
                    y: mouseEvent.clientY,
                    radius: fovCanvas.width/5,
                    fill: "black"
                });
            }

            if(fovPatternImg.complete && propsExternal.showOtherFovLoss) {
                let currentXPos = -(fovCanvas.width/2);
                let currentYPos = -(fovCanvas.height/2);

                ctx.globalCompositeOperation = "darken"
                ctx.filter = 'blur(10px)';

                if(fovPatternImg.complete) {
                        while (currentXPos < fovCanvas.width) {
                            while (currentYPos < fovCanvas.height) {
                                ctx.drawImage(fovPatternImg,currentXPos,currentXPos);
                            currentYPos = (currentYPos + fovPatternImg.height)
                            ctx.drawImage(fovPatternImg,currentXPos,0);
                            currentXPos = (currentXPos + fovPatternImg.width)
                        }
                    }
                }
            }
        }

function startRendering() {
    rendering = true;
    renderLoop();
}

function stopRendering() {
    rendering = false;
}

function renderLoop() {
    renderCanvas();
    if (rendering) {
        requestAnimationFrame(renderLoop);
    } else {
        ctx.clearRect(0, 0, fovCanvas.width, fovCanvas.height);
    }
}


</script>

<style>
.fov-canvas {
    position: fixed;
    pointer-events: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index:10;
}
.layout {
    transition: filter 0.5s;
}
.layout.blurry {
    filter: blur(1.25px);
}
</style>