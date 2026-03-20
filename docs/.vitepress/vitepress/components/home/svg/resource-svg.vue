<template>
  <svg
    class="resource-svg"
    width="160"
    height="120"
    viewBox="0 0 160 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="80" cy="60" r="60" fill="var(--resource-c-0)" />
    <rect
      x="32"
      y="14"
      width="96"
      height="73"
      rx="4"
      fill="var(--resource-c-1)"
    />
    <rect x="38" y="20" width="84" height="56" fill="var(--resource-c-2)" />
    <rect x="78" y="31" width="14" height="14" fill="var(--resource-c-3)" />
    <rect x="98" y="31" width="14" height="14" fill="#FF9EA4" />
    <rect x="78" y="51" width="14" height="14" fill="#FFCFC7" />
    <rect x="57" y="51" width="14" height="14" fill="var(--resource-c-3)" />
    <path d="M127.966 82H32.0339L25 95H136L127.966 82Z" fill="#20A0FF" />
    <path
      d="M25 95H136V97C136 98.1046 135.105 99 134 99H27C25.8954 99 25 98.1046 25 97V95Z"
      fill="#0077CE"
    />
    <circle cx="37" cy="41" r="15" fill="#20A0FF" />
    <path d="M41 35H33L29 39L37 48L45 39L41 35Z" fill="white" />
    <rect x="6" y="39" width="12" height="4" rx="2" fill="#FFCFC7" />
    <rect
      x="11.8955"
      y="22"
      width="12"
      height="4"
      rx="2"
      transform="rotate(28.2865 11.8955 22)"
      fill="#FF9EA4"
    />
    <rect
      x="23.4775"
      y="11"
      width="12"
      height="4"
      rx="2"
      transform="rotate(60.3794 23.4775 11)"
      fill="#FFCFC7"
    />
  </svg>
</template>

<style scoped lang="scss">
.resource-svg {
  --resource-c-0: #eff5fd;
  --resource-c-1: #d9edfe;
  --resource-c-2: white;
  --resource-c-3: #eff5fd;
}
.dark .resource-svg {
  --resource-c-0: #272b31;
  --resource-c-1: #3b6a92;
  --resource-c-2: #273751;
  --resource-c-3: #3a5a88;
}
</style>
