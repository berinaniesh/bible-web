<script lang="ts">
	export let data;
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import { Separator } from "$lib/components/ui/separator";
	import Header from '$lib/components/Header.svelte';
</script>

<Header displayParallel={false} parallelSelectionForm={""} currentTranslation={""}/>
<Separator />

<Breadcrumb crumbItems={data.currentLocation} />

<h1 class="mb-4 text-xl font-bold">About</h1>
<ul class="mb-8 ml-4 list-disc leading-8 md:ml-8">
	<li>
		This site is built by <a class="underline" target="blank" href="https://berinaniesh.xyz">Berin Aniesh</a
		> in the hopes that it will be useful to someone.
	</li>
	<li>
		If you have any comments or feedbacks about the site, <a
			target="blank"
			class="underline"
			href="https://berinaniesh.xyz/contact">let me know</a
		>.
	</li>
	<li>
		To participate in the development, join the <a target="blank" href="https://t.me/bibleappdesign"
			><u>telegram group</u></a
		>.
	</li>
	<li>
		Everything on this site is <a
			class="underline"
			target="blank"
			href="https://github.com/berinaniesh/bible-web">open sourced</a
		>. Forking and self hosting is not only allowed, but encouraged.
	</li>
	<li>
		The backend of this site can be found <a
			target="blank"
			class="underline"
			href="https://api.bible.berinaniesh.xyz/docs">here</a
		>
		and the source for the same can be found
		<a class="underline" target="blank" href="https://github.com/berinaniesh/bible-api">here</a>.
	</li>
	<li>
		No guarantees are made for the availability, reliability or correctness of the frontend or the
		backend.
	</li>
	<li>
		The source of Bible translations can be found at <a
			class="underline"
			target="blank"
			href="https://github.com/tfbf">TFBF’s GitHub Repo</a
		>.
	</li>
	<li>Bible requests welcome as long as the translation requested is in the public domain.</li>
	<li>
		Bible translations in Bengali, Kannada, Punjabi, Hindi, Telugu, Odia, Gujarati, Assamese and
		Russian are available. If you know any of the above languages and can spare some time (to fix
		spelling mistakes, separate grouped verses into individual verses, etc), <a
			class="underline"
			target="blank"
			href="https://berinaniesh.xyz/contact">get in touch</a
		>.
	</li>
	<li>
		Due to the structure of the database and the backend, adding the Apocrypha is not possible (in
		any translation).
	</li>
</ul>
