<template>
    <div class="layout text-base overflow-visible" ref="layout" @mousemove="mousemove" :class="{ blurry: blurry }">
        <canvas class="fov-canvas" ref="fovCanvas"></canvas>
        <slot></slot>
    </div>
</template>

<script lang="ts">import { checkType } from "vite-plugin-ssr/dist/cjs/utils/checkType";


let mouseEvent;

export default {
    data() {
        return {
        }
    },
    props: {
        blurry: Boolean,
        showReducedFov: Boolean
    },
    methods: {
        mousemove(event) {
            mouseEvent = event;
        }
    },
    mounted() {
        initCanvas(this.$refs.fovCanvas, this.$refs.layout);
    },
    watch: {
        showReducedFov(newB, oldB) {
            console.log(this.showReducedFov);
            if (newB) {
                startRendering();
            } else {
                stopRendering();
            }
        }
    }
}

let fovCanvas;
let ctx;
let layout;

function initCanvas(fovCanvasRef, layoutRef) {
    console.log(fovCanvasRef);
    fovCanvas = fovCanvasRef;
    ctx = fovCanvas.getContext('2d');
    layout = layoutRef;
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
    ctx.fillRect(0,0,fovCanvas.width, fovCanvas.height)
    ctx.globalCompositeOperation = "destination-out"
    ctx.filter = 'blur(20px)';
    if (mouseEvent) {
            drawCircle({
                ctx,
            x: mouseEvent.clientX,
            y: mouseEvent.clientY,
            radius: fovCanvas.width/4,
            fill: "black"
        });
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
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
}
.layout {
    transition: filter 0.5s;
}
.layout.blurry {
    filter: blur(1.25px);
}
</style>