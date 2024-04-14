<template>
  <div class="layout">
    <header>
      <!-- Определяем слот для заголовка -->
      <slot name="header">Default Header</slot>
    </header>
    <main>
      <!-- Определяем слот для основного содержимого -->
      <slot>Default Content</slot>
    </main>
    <footer>
      <!-- Определяем слот для футера -->
      <slot name="footer">Default Footer</slot>
    </footer>
  </div>
</template>

<style>
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}
header, footer {
  padding: 20px;
  background-color: #f8f9fa;
}
main {
  flex: 1;
  padding: 20px;
}
</style>
