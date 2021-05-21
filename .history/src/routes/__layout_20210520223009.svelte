<script>
    import "../global.scss";
    import Nav from './components/Nav.svelte';
    import Footer from './components/Footer.svelte';
    import AltNav from './components/AltNav.svelte';
</script>

<AltNav />

<slot />

<Footer />