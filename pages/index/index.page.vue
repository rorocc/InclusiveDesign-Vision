<template>
  <PageSection class="max-w-prose">

    <div class="flex intro-block">
      <div class="flex-none intro-block-icon text-center ">
        <span class="material-icons-outlined  h-full inline-flex items-center text-5xl">manage_search</span>
      </div>
      <div>
        <Paragraph>
          Sehbeeinträchtigungen können dazu führen, dass Menschen bei der Nutzung von Software oder Webseiten eingeschränkt sind. Dies kann unter anderem daran liegen, dass sie z. B. Texte nicht vernünftig lesen können oder Inhalte nicht so dargestellt werden, dass diese wahrgenommen werden können.
        </Paragraph>
      </div>
    </div>

    <div class="flex intro-block">
      <div class="flex-none intro-block-icon text-center ">
        <span class="material-icons-outlined  h-full inline-flex items-center text-5xl">palette</span>
      </div>
      <div>
        <Paragraph>
          Durch eine angemessene barrierefreie Gestaltung ist es aber möglich, diesen Einschränkungen entgegenzuwirken und die Inhalte so zugänglich wie möglich zu machen. Auf dieser Webseite wollen wir einen Überblick über die verschiedenen Sehbeeinträchtigungen geben und präsentieren, wie durch das bewusste Gestalten oder Bieten von individuellen Anpassungsmöglichkeiten auf die Bedürfnisse von betroffenen Personen eingegangen werden kann.
        </Paragraph>
      </div>
    </div>

    <div class="flex intro-block">
      <div class="flex-none intro-block-icon text-center ">
        <span class="material-icons-outlined  h-full inline-flex items-center text-5xl">try</span>
      </div>
      <div>
        <Paragraph>
          <b>Neugierig, wie sich solche Beeinträchtigungen überhaupt auswirken?</b>
          Durch unseren Simulator unten rechts kann ausprobiert werden, wie bspw. eine verminderte Sehschärfe oder ein verringertes Sichtfeld bei der Betrachtung dieser Webseite aussehen würde.
        </Paragraph>
      </div>
    </div>

  </PageSection>

  <div class="grid w-full grid-cols-1 lg:grid-cols-3 gap-0">

    <div class="col-span-2 max-w-prose">
      <PageSection id="overview">
        <h1>Welche Sehbeeinträchtigungen gibt es?</h1>
        <Paragraph>Die Auswirkungen, die Sehbeeinträchtigungen auf die Benutzung von Software und Webseiten haben können, können sich in die folgenden fünf Kategorien aufteilen lassen.
        </Paragraph>
          <ol>
            <li>Sehschärfe</li>
            <li>Lichtsensitivität</li>
            <li>Kontrastsensitivität</li>
            <li>Sichtfeld</li>
            <li>Farberkennung</li>
          </ol>
        <Paragraph>Sehbeeinträchtigungen können unterschiedliche Ursachen haben und durch verschiedene Erkrankungen oder Einschränkungen entstehen.
          Dabei können Menschen auch von mehreren Sehbeeinträchtigungen betroffen sein.
          Im Folgenden werden die häufigsten Beeinträchtigungen beschrieben, die einen direkten Einfluss auf die Nutzbarkeit von Software und Webseiten haben können.
        </Paragraph>

        <div class="article-heading ">
          <h2 id="ametropie">Ametropie</h2>
          <div>
            <span class="betrifft">Auswirkungen:</span>
            <span class="pill py-auto">Sehschärfe</span>
          </div>
        </div>

        <Paragraph>Bei einer Ametropie hat das Auge ein Problem, durch die Form des Auges und/oder der Hornhaut das Licht auf der Retina zu fokussieren. Dadurch wird das Gesehene unscharf.
          Eine Ametropie kann in den folgenden verschiedenen Formen auftreten.
        </Paragraph>
        <div class="flex simulator-hinweis"><span class="material-icons-outlined  h-full inline-flex items-center text-3xl">try</span><Paragraph>Erfahren Sie die Auswirkungen von verringerter Sehschärfe im Simulator.</Paragraph></div>

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
              sondern in einer Brennlinie.  Dadurch können Objekte unscharf werden, unabhängig von der Entfernung.
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
        <div class="article-heading ">
          <h2 id="grauerstar">Grauer Star (Katarakt)</h2>
          <div class="grid grid-flow-row md:grid-flow-col min-w-0 space-y-1">
            <span class="betrifft">Auswirkungen:</span>
            <span class="pill max-w-min py-auto">Sehschärfe</span>
            <span class="pill max-w-min py-auto">Lichtsensitivität</span>
            <span class="pill max-w-min py-auto">Kontrastsensitivität</span>
          </div>
        </div>
        <Paragraph>Bei einem Grauen Star ist die Augenlinse getrübt. Dadurch kommt es zu verschwommenem Sehen und einer höheren Empfindlichkeit für Blendungen. Dies kommt durch einen reduzierten Bildkontrast und Betroffene nehmen ihr Sichtfeld wie durch einen Nebel wahr.</Paragraph>

        <div class="article-heading ">
          <h2 id="glaukom">Glaukom (Grüner Star)</h2>
          <div class="">
            <span class="betrifft">Auswirkungen:</span>
            <span class="pill py-auto">Sichtfeld</span>
          </div>
        </div>
        <Paragraph>Der Begriff Glaukom fasst verschiedene Augenerkrankungen zusammen, die eine nicht umkehrbare Schädigung des Sehnervs bezeichnen. Bei Menschen mit einem Glaukom treten im Sichtfeld “blinde Flecken” auf. Dabei beginnt der Ausfall meist am Randbereich des wahrgenommenem Bildes und verteilt sich im Verlauf der Erkrankung auf das gesamte Sichtfeld.</Paragraph>
        <div class="flex simulator-hinweis"><span class="material-icons-outlined  h-full inline-flex items-center text-3xl">try</span><Paragraph>Erfahren Sie die Auswirkungen von Sichtfeldeinschränkungen im Simulator.</Paragraph></div>
      </PageSection>

      <PageSection id="usability">
        <h1>Usability & Sehbeeinträchtigungen</h1>
        <Paragraph>
          Die Bedürfnisse von Nutzenden mit Sehstörungen unterscheiden sich individuell, abhängig von der Art der Einschränkung und der Schwere der Einschränkung. Um darauf eingehen zu können, kann man diese Bedürfnisse in verschiedene Kategorien einteilen.
          Um Webseiten und Software so barrierefrei wie möglich zu gestalten sollte den Nutzenden ermöglicht werden, eigene Einstellungen in eben diesen Kategorien treffen zu können um ihr Nutzungserlebnis nach eigenen Wünschen anpassen zu können
        </Paragraph>

        <h2 id="helligkeit">Helligkeit & Farbe</h2>
        <Paragraph>
          Helles Licht eines Bildschirms oder von anderen Quellen erschwert es einigen Menschen mit schlechter Sicht Texte zu lesen und kann auch Schmerzen verursachen. Dies kann durch eine Einstellungsmöglichkeit der Helligkeit vermieden werden.
          Auch Hintergrund- und Schriftfarbe zur Anpassung des Kontrastes spielen eine wichtige Rolle für die Lesbarkeit. Hierbei können die optimalen Bedingungen für die Lesbarkeit stark zwischen individuellen Menschen unterscheiden, weswegen eine breite Möglichkeit an Einstellungen hilft.
        </Paragraph>
        <Paragraph>
          Weiterhin können durch Farbsinnstörungen Einschränkungen beim Betrachten entstehen, weswegen es für eine Barrierefreiheit wichtig ist, nicht auf Farben zurückzugreifen um verschiedene Elemente zu unterscheiden.
        </Paragraph>

        <div class="contrast-quiz flex justify-center space-x-5">
          <div class="flex-none text-center color-block">
            <span class="h-full inline-flex items-center text-5xl">Abc</span>
          </div>
          <div  v-if="!isQuizClicked">
            <h3>Was denken Sie?</h3>
            <Paragraph>Ist der vorliegende Farbkontrast für eine barrierefreie Gestaltung ausreichend?</Paragraph>
            <div class="flex space-x-8 my-2">
              <button @click="isQuizClicked = 'y'">Ja</button><button @click="isQuizClicked = 'n'">Nein</button>
            </div>
          </div>
          <div v-else>
            <h3 v-if="isQuizClicked === 'y'">Leider nicht!</h3>
            <h3 v-if="isQuizClicked === 'n'">Korrekt!</h3>
            <Paragraph>Die vorliegende Farbkombination hat ein Kontrastverhältnis von 2.17:1. Für eine barrierefreie Gestaltung empfiehlt WCAG mindestens ein Verhältnis von 3:1.</Paragraph>
            <Source><a href="https://www.w3.org/TR/WCAG21/#contrast-minimum">w3.org - WCAG 2.1 Kontrastminimum </a></Source>
          </div>
        </div>

        <h2 id="lesefluss">Lesefluss</h2>
        <Paragraph>
          Beim Tracking geht es darum, den Zeilen des Textes folgen zu können und den Text so anzuordnen, dass er von verschiedenen Menschen so gelesen werden kann, wie es für sie am besten funktioniert.
          Dies kann bspw. dadurch gewährleistet werden, dass Texte die durch das Einstellen einer größeren Schriftart so angeordnet werden, dass Nutzende nur vertikal scrollen müssen und nicht horizontal und vertikal.
        </Paragraph>
        <Paragraph>
          Weiterhin kann es schwierig sein, Texten oder Inhalten mit mehreren Spalten zu folgen, wenn sie am Ende eines Absatzes wieder nach oben scrollen müssen. Hier kann es helfen, Nutzenden anzubieten den Text in einer Spalte darzustellen.
        </Paragraph>

        <h2 id="wahrnehmung">Wahrnehmung</h2>
        <Paragraph>Bei der Wahrnehmung geht um das Erkennen von einzelnen Zeichen und Symbolen. Dabei können verschiedene Elemente verwendet werden, um Text und Anzeigen für Nutzende lesbarer zu gestalten.
          Dies kann durch das freie Einstellen von Schriftgröße, dem Schriftfont, dem Schriftstil (z.B. fett oder unterstrichen) oder von Groß- und Kleinschreibung ermöglicht werden.
        </Paragraph>

          <h2 id="textabstand">Text- und Zeilenabstand zum Lesen</h2>
        <Paragraph>
          Mithilfe von variabel einstellbaren Abständen zwischen Zeilen, Buchstaben und Wörtern können Texte lesbarer gestaltet werden. Auch eine freie Einstellung der Textausrichtung kann dabei unterstützen.
        </Paragraph>
        <Paragraph>
          Weiterhin ist für einige Menschen schwierig Buchstaben zu unterscheiden wenn diese nah am Rand sind. Durch frei einstellbare Seitenränder und/oder einstellbare Umrandungen um einzelne Textblöcke zu unterscheiden kann die Lesbarkeit weiterhin gesteigert werden.
        </Paragraph>

        <h2 id="individuelleElemente">Steuerung von individuellen Elementen</h2>
        <Paragraph>Durch das Verändern von Schriftgröße kann es dazu kommen, dass gewisse Elemente wie bspw. Überschriften zu groß werden um den eigentlichen Text gut lesen zu können. Weiterhin präferieren einige Menschen es, den Haupttext größer einzustellen als Überschriften oder haben einen Stil gefunden, mit dem sie persönlich die beste Lesbarkeit haben. Deswegen kann es helfen, Nutzenden zu erlauben einzelne Elemente wie eben Überschriften, Text oder Listen individuell anzupassen.
        </Paragraph>

        <h2 id="betrachtungsfeld">Betrachtungsfeld und Nähe</h2>
        <Paragraph>
          Durch das Vergrößern von Text ändert sich auch der Bereich der im Sichtfeld ist. Wenn der Fokuspunkt dabei nicht der gleiche bleibt wie vor dem Verändern kann es für einige Menschen schwierig sein, diesen Punkt wiederzufinden. Deswegen sollte der Fokuspunkt bei Anpassungen wie Zoomen oder Formatieren der gleiche bleiben.
          Menschen mit einem limitierten Sichtfeld haben wenige Elemente zur gleichen Zeit in ihrem Sichtfeld. Wenn zusammengehörende Informationen oder Feedback nach Aktionen nicht in der Nähe zueinander sind, kann es schwierig werden diese wahrzunehmen.
        </Paragraph>

        <h2 id="einstellungsmoeglichkeiten">Einstellungsmöglichkeiten richtig einbinden</h2>
        <Paragraph>
          Durch das Verändern von bspw. Größe oder Zeilenabstand kann es passieren, dass Elemente aus dem Sichtfeld verschwinden oder auch überlappen und unlesbar werden. Deswegen ist es wichtig, eine Größenanpassung so zu gestalten, dass alle Elemente in der richtigen Form bleiben und keine Interface-Elemente versteckt werden, die der Nutzende sehen sollte.
        </Paragraph>
        <Paragraph>
          Da es weiterhin für einige Nutzende schwierig ist, Text auf einem Bildschirm zu lesen sollte es ermöglicht werden, den Text jederzeit druckbar zu machen und dabei auch die individuellen Einstellungen die getroffen worden sind zu berücksichtigen.
          Die meisten Betriebssysteme oder Browser ermöglichen Nutzenden es, Standardeinstellungen nach ihrer persönlichen Präferenz zu treffen. Diese sollten von einer barrierefreien Website automatisch übernommen werden können.
        </Paragraph>

        <h2 id="allgemeine">Allgemeine Hinweise</h2>
        <Paragraph>
          Für die generelle Benutzung von Software und Webseiten kann es außerdem hilfreich sein, Shortcuts zu erstellen oder Browser-Shortcuts zu erlauben. Dadurch sind Nutzende nicht nur auf ihre visuelle Wahrnehmung angewiesen, sondern können auch mit vertrauten Möglichkeiten Anpassungen machen oder Befehle ausführen, die bei der Nutzung unterstützen.
          Weiterhin sollte sichergestellt werden, dass es Screenreadern ermöglicht wird, die Inhalte vorzulesen.
        </Paragraph>
      </PageSection>

      <PageSection id="sources">
        <h1>Mehr zum Thema?</h1>
        <Paragraph>Hier finden Sie unsere Quellen und weitere Informationen zu Sehbeeinträchtigungen.</Paragraph>
        <div class="grid">
          <Source><a href="https://www.w3.org/TR/low-vision-needs/">W3.org - Accessibility Requirements for People with Low Vision</a></Source>
          <Source><a href="https://uxdesign.cc/web-accessibility-for-visual-impairment-a8ee4bb3aef8">uxdesign.cc - Web accessibility for visual impairments</a></Source>
          <Source><a href="https://www.tk.de/techniker/gesundheit-und-medizin/behandlungen-und-medizin/augenerkrankungen-2018768">TK.de - Augenerkrankungen</a></Source>
        </div>
      </PageSection>
    </div>

    <aside aria-label="Inhaltsverzeichnis" class="hidden lg:block">
      <nav aria-label="Inhaltsverzeichnis" class="section-nav sticky">
        <ol>
          <li><a href="#overview">Welche Sehbeeinträchtigungen gibt es?</a>
            <ol>
              <li><a href="#ametropie">Ametropie</a></li>
              <li><a href="#grauerstar">Grauer Star (Katarakt)</a></li>
              <li><a href="#glaukom">Glaukom (Grüner Star)</a></li>
            </ol>
          </li>
          <li><a href="#usability">Usability & Sehbeeinträchtigungen</a>
            <ol>
              <li><a href="#helligkeit">Helligkeit & Farbe</a></li>
              <li><a href="#lesefluss">Lesefluss</a></li>
              <li><a href="#wahrnehmung">Wahrnehmung</a></li>
              <li><a href="#textabstand">Text- und Zeilenabstand zum Lesen</a></li>
              <li><a href="#individuelleElemente">Steuerung von individuellen Elementen</a></li>
              <li><a href="#betrachtungsfeld">Betrachtungsfeld und Nähe</a></li>
              <li><a href="#einstellungsmoeglichkeiten">Einstellungsmöglichkeiten richtig einbinden</a></li>
              <li><a href="#allgemeine">Allgemeine Hinweise</a></li>
            </ol>
          </li>
          <li><a href="#sources">Mehr zum Thema?</a></li>
        </ol>
      </nav>
    </aside>

  </div>
</template>

<script setup>
import PageTitle from '../../components/PageTitle.vue';
import PageSection from '../../components/PageSection.vue';
import Source from '../../components/Source.vue';
import Image from '../../components/Image.vue';
import Paragraph from '../../components/Paragraph.vue';

</script>

<script>
export default {
  data() {
    return {
      isQuizClicked: false
    }
  },
}
</script>

<style>
.simulator-hinweis{
  @apply ml-4 space-x-2 my-2 font-bold;
}

.simulator-hinweis span{
  color: var(--background-color-secondary)
}

.contrast-quiz{
  background-color: var(--text-header-color);
  @apply w-full ml-4 p-4;
}

.contrast-quiz button{
  color: var(--background-color-primary);
  background-color: var(--text-primary-color);
  @apply py-1 px-12 rounded-3xl;
}

.color-block{
  background-color: #1E1B1A;
  @apply w-36 h-36 align-middle items-center;
}

.color-block span{
  color: #A80000;
}

.intro-block{
  @apply pb-3 align-middle items-center;
}

.intro-block-icon {
  color: var(--background-color-primary);
  background-color: var(--background-color-secondary);
  @apply h-32 w-32 mr-3;
}

.article-heading{
  @apply items-center pt-4 w-full justify-between;
}

.article-heading .betrifft{
  color: var(--text-primary-color);
  @apply font-bold uppercase tracking-widest opacity-50;
}

.article-heading h2{
  @apply flex-none mb-3;
}

.pill{
  background-color: var(--background-color-secondary);
  color: var(--text-header-color);
  border-radius: 999em;
  @apply px-3 ml-2;
}

ol{
  list-style-type: decimal;
  @apply ml-8;
}


.section-nav li.active > a {
  color: #333;
  font-weight: 500;
}

/* Sidebar Navigation */
.section-nav {
  padding-left: 0;
  border-left: 1px solid var(--background-color-secondary);
}

.section-nav{
  position: sticky;
  top: 100px;
  align-self: flex-start;
}

.section-nav a {
  text-decoration: none;
  display: block;
  padding: .125rem 0;
  color: var(--text-primary-color);
  transition: all 50ms ease-in-out; /* 💡 This small transition makes setting of the active state smooth */
}

.section-nav a:hover,
.section-nav a:focus {
  color: #666;
}

.section-nav ul, .section-nav ol {
  list-style: none;
  margin: 0;
  padding: 0;
}
.section-nav li {
  margin-left: 1rem;
}
</style>