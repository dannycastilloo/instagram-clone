<script>
    export default {
        name: 'SEARCH',
    }
</script>

<template>
    <div class="rounded-md bg-gray1 flex gap-4 px-2 py-1">
        <label for="search-input" class="flex items-center cursor-pointer">
            <img src="/icons/search.svg" class="w-4 h-4" alt="Search" >
        </label>
        
        <input 
            class="flex-1 bg-transparent border-none outline-none text-white"
            placeholder="Search" />
    </div>
</template>