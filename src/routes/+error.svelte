<script lang="ts">
    import { page } from '$app/state';

</script>

<div class="flex flex-col items-center justify-center">
    <h1 class="text-4xl p-4 pt-12">Error {page.status}</h1>
    <p class="text-lg">{page.error.message}</p>
    <div class="rounded-lg p-2 bg-purple-500 text-white mt-4">
        <a href="/">Go back to the home page</a>
    </div>
</div>