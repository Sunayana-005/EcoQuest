import '../styles/recycle.css'

export default function Recycle() {
    return (
<div>
    <h1>Sort the Garbage!</h1>
        <div id="score">Score: 0</div>

    <div class="game-container">
        <div class="items">
            <img id="item1" src="/assets/plastic.png" class="draggable" data-type="plastic" draggable="true"/>
            <img id="item2" src="/assets/banana.png" class="draggable" data-type="organic" draggable="true"/>
            <img id="item3"src="/assets/paper.png" class="draggable" data-type="paper" draggable="true"/>
        </div>

        <div class="bins">
            <div class="bin" data-accept="plastic">Plastic Bin</div>
            <div class="bin" data-accept="organic">Organic Bin</div>
            <div class="bin" data-accept="paper">Paper Bin</div>
        </div>
    </div>

    <div id="feedback">
        <img src="spirit.png" id="spirit" />
        <p id="message">I'm watching your choices...</p>
    </div>
    <script src="../scripts/recycle.js"></script>
</div>

    )
}