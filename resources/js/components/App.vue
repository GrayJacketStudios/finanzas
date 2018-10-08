    <template>
        <div>
                <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
                <div class="container">
                    <ul class="navbar-nav">
                        <router-link :to="{ name: 'welcome' }" class="nav-link">Inicio</router-link>
                        <router-link :to="{ name: 'page' }" class="nav-link" >Spa-Page</router-link>
                    </ul>
                </div>
            </nav>
            <main>
                <router-view></router-view>
            </main>
             <footer>
            &copy; Awesome Company
            </footer>
        </div>
    </template>
    <script>
        export default {}
    </script>
