<template>
  <div class="py-8">
    <div class="container mx-auto py-2 flex">
      <div class="w-1/2 flex flex-col px-16 justify-center text-center">
        <h2 class="text-3xl font-bold mb-5">{{ $t("about.about") }}</h2>
        <div>
          <ul>
            <li>
              {{ $t("about.about1") }}
            </li>
            <li>
              {{ $t("about.about2") }}
            </li>
            <li>
              {{ $t("about.about3") }}
            </li>
          </ul>
        </div>
      </div>
      <div class="w-1/2 relative">
        <img class="w-full rounded-full" src="/assets/img/about.png" alt="about-us" />
        <!-- <div class="absolute h-full w-1/2 -top-6 -left-6 -z-10 bg-indigo-900 rounded-full" /> -->
      </div>
    </div>
  </div>
</template>
