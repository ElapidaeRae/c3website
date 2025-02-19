<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main class="md:px-80 px-10 md:py-20 py-10 bg-gray-900 min-h-screen text-white">
    <nav class="flex flex-nowrap md:flex-wrap justify-between items-center bg-gray-800 rounded-lg p-4">
        <a href="/" class="text-white text-2xl p-2">elapidae.gay</a>
        <div>
            <div class="px-4 space-x-4">
                <a href="/" class="text-white">Home</a>
                <a href="/contact" class="text-white">Contact</a>
                <a href="/RaeNoble-CV.pdf" class="text-white">CV</a>
            </div>
        </div>
    </nav>

    {@render children()}

</main>
