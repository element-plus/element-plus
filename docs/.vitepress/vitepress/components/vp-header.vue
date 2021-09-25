<template>
  <header class="nav-bar">
    <div class="nav-wrapper">
      <div class="header-container">
        <a :href="currentRoot" class="icon-link">
          <slot name="header-logo"></slot>
          <!-- <ElIcon class="logo">
            <ElementPlusTextLogo class="nav-logo" />
          </ElIcon> -->
        </a>

        <div class="nav-action-items">
          <AlgoliaSearch :options="theme.agolia" />
          <nav class="nav-menu">
            <slot name="header-nav"></slot>
          </nav>
          <div :class="{ 'theme-switcher': true, 'is-dark': isDark }">
            <ElIcon class="header-icon" @click="$emit('toggle-dark')">
              <Dark class="dark-icon" />
              <Light class="light-icon" />
            </ElIcon>
          </div>
          <div class="action-icons">
            <div class="action-group translations">
              <ElIcon class="header-icon translation-icon">
                <TranslationIcon />
                <div class="dropdown-content">
                  <ul class="languages-list">
                    <li
                      v-for="l in langs"
                      :key="l"
                      :class="{ language: true, selected: l === lang }"
                      @click="switchLang(l)"
                    >
                      {{ languageMap[l] }}
                    </li>
                  </ul>
                </div>
              </ElIcon>
            </div>
            <!-- Since we only have github icon for now so that we need to comment this line -->
            <!-- <div v-if class="header-socials"></div> -->
            <ElIcon class="header-icon social-icon">
              <a
                href="https://github.com/element-plus/element-plus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
              </a>
            </ElIcon>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="sub-nav">
    <ToggleSidebarBtn v-if="hasSidebar" @toggle="$emit('toggle-sidebar')" />
    <Transition name="shifting">
      <ElButton
        type="text"
        :class="{ 'go-back-top': true, show: shouldShow }"
        @click.prevent.stop="scrollToTop"
        >{{ 'Back to top' }}</ElButton
      >
    </Transition>
  </div>
</template>
