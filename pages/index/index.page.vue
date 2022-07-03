<template>
  <PageSection>
    <h1>Welche Sehbeeinträchtigungen gibt es?</h1>
    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni obcaecati illum quibusdam, odio placeat nulla maiores doloribus quos deleniti optio soluta libero explicabo error nemo atque, temporibus sunt vero recusandae autem hic vitae itaque eos. Rem necessitatibus quas deleniti error quisquam ea eaque culpa quia adipisci maxime, nesciunt laboriosam repellat!</Paragraph>
    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni obcaecati illum quibusdam, odio placeat nulla maiores doloribus quos deleniti optio soluta libero explicabo error nemo atque, temporibus sunt vero recusandae autem hic vitae itaque eos. Rem necessitatibus quas deleniti error quisquam ea eaque culpa quia adipisci maxime, nesciunt laboriosam repellat!</Paragraph>
    <h2>Ametropie</h2>
    <Paragraph>Bei einer Ametropie hat das Auge ein Problem, durch die Form des Auges und/oder der Hornhaut das Licht auf der Retina zu fokussieren. Dadurch wird das Gesehene unscharf.
      Eine Ametropie kann in den folgenden verschiedenen Formen auftreten.
    </Paragraph>
    <div class="ml-4">
      <div class="content-block">
        <h3>Kurzsichtigkeit (Myopie)</h3>
        <Paragraph>Bei einer Kurzsichtigkeit wird das Licht vom Auge vor der Retina fokussiert. Dadurch
          werden Objekte die weiter entfernt sind unscharf, während Objekte die näher dran
          sind scharf gesehen werden.
        </Paragraph>
      </div>

      <div class="content-block">
        <h3>Weitsichtigkeit (Hypermetropie)</h3>
        <Paragraph>Bei der Weitsichtigkeit ist es andersrum. Objekte die weiter entfernt sind werden
          scharf gesehen, während Objekte die nahe sind unscharf gesehen werden.
        </Paragraph>
      </div>

      <div class="content-block">
        <h3>Hornhautverkrümmung (Astigmatismus)</h3>
        <Paragraph>Bei einer Hornhautverkrümmung werden die Lichtstrahlen, die von einem
          betrachtetem Objekt ausgehen nicht auf einem Punkt auf der Netzhaut gebündelt,
          sondern in einer Brennlinie.  Dadurch können Objekte unscharf werden, unabhängig von der Entfernung
        </Paragraph>
      </div>

      <div class="content-block">
        <h3>Alterssichtigkeit (Presbyopie)</h3>
        <Paragraph>Die Alterssichtigkeit bezeichnet den altersbedingten Verlust der Fähigkeit das Sehen auf nahe Objekte zu fokussieren. </Paragraph>
      </div>

      <div class="content-block">
        <h3>Anisometrie</h3>
        <Paragraph>Haben das linke und das rechte Auge unterschiedliche Ametropien, spricht man von
          einer Anisometrie. Das heißt, dass bspw. das linke Auge kurzsichtig ist, während das
          rechte Auge weitsichtig ist.
        </Paragraph>
      </div>

    </div>

    <h2>Grauer Star (Katarakt)</h2>
    <Paragraph>Bei einem Grauen Star ist die Augenlinse getrübt. Dadurch kommt es zu verschwommenem Sehen und einer höheren Empfindlichkeit für Blendungen. Dies kommt durch einen reduzierten Bildkontrast und Betroffene nehmen ihr Sichtfeld wie durch einen Nebel wahr.</Paragraph>

    <h2>Glaukom (Grüner Star)</h2>
    <Paragraph>Der Begriff Glaukom fasst verschiedene Augenerkrankungen zusammen, die eine nicht umkehrbare Schädigung des Sehnervs bezeichnen. Bei Menschen mit einem Glaukom treten im Sichtfeld “blinde Flecken” auf. Dabei beginnt der Ausfall meist am Randbereich des wahrgenommenem Bildes und verteilt sich im Verlauf der Erkrankung auf das gesamte Sichtfeld.</Paragraph>
  </PageSection>
</template>

<script lang="ts" setup>
import PageTitle from '../../components/PageTitle.vue';
import PageSection from '../../components/PageSection.vue';
import Image from '../../components/Image.vue';
import Paragraph from '../../components/Paragraph.vue';

</script>
