<script lang="ts">
    // An 88x31 button component
    interface ButtonProps {
        src: string;
        alt: string;
        href: string;
    }

    let { src, alt, href }: ButtonProps = $props();
    src = "/static/buttons/" + src;
</script>


<a {href}><img src={src} alt={alt} width="88" height="31" /></a>