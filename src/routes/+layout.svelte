<script lang="ts">
	import '../app.css';
	let { children } = $props();
    import image from '$lib/transdisc.gif'
</script>

<main class="lg:px-80 px-10 lg:py-20 py-10 bg-gray-900 min-h-screen text-white">
    <div class="flex md:flex-nowrap flex-wrap justify-between items-center bg-gray-800 rounded-lg p-4 overscroll-auto">
        <a href="/" class="text-white text-2xl p-2 flex justify-center items-center">
            <img src={image} alt="" class="md:h-16 h-8 pr-2 mx-auto" />
            elapidae.gay
        </a>
        <nav class="flex justify-center items-center">
            <div class="px-4 space-x-4">
                <a href="/" class="text-white">Home</a>
                <a href="/buttons" class="text-white">Buttons</a>
                <a href="/contact" class="text-white">Contact</a>
<!--                <a href="/RaeNoble-CV.pdf" class="text-white">CV</a>-->
            </div>
        </nav>
    </div>

    {@render children()}

</main>
