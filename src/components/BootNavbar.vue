<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container">
      <router-link to="/" class="navbar-brand">Bootstrap Test</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar-content">
        <ul class="navbar-nav me-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">
              DummyImage
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/button" class="nav-link">
              Button
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#" class="nav-link btn btn-info text-dark">お問い合わせ</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'BootNavbar',
}
</script>