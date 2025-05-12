<script lang="ts">
    let num = 0;

    function random(max: number) {
        num = Math.floor(Math.random() * max);
    }
    function randomRange(min: number, max: number) {
        num = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let pages = [

    ]

    function randomPage() {
    }
</script>

<div class="items-center justify-center flex flex-col p-8">
    <h1 class="p-2 text-4xl">Random Number Generator</h1>
    <p class="p-2 text-2xl">Random number: {num}</p>
    <div class="flex flex-row">
        <button class="p-2 bg-blue-500 text-white m-2 rounded-l-lg" on:click={() => random(100)}>Random 0-100</button>
        <button class="p-2 bg-blue-500 text-white m-2" on:click={() => randomRange(1,6)}>d6</button>
        <button class="p-2 bg-blue-500 text-white m-2" on:click={() => randomRange(1,8)}>d8</button>
        <button class="p-2 bg-blue-500 text-white m-2" on:click={() => randomRange(1,10)}>d10</button>
        <button class="p-2 bg-blue-500 text-white m-2 rounded-r-lg" on:click={() => randomRange(1,20)}>d20</button>
    </div>
</div>

