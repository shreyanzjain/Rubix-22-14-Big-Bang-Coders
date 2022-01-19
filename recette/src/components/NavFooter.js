import React from 'react';

function NavFooter() {
    return (
        <div>
        <footer class="text-gray-600">
        <div>
            <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                <p class="leading-relaxed text-lg">Adopt the pace of nature. Her secret is patience.</p>
                <span class="inline-block h-1 w-10 rounded bg-emerald-300 mt-8 mb-6"></span>
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Ralph Waldo Emerson</h2>
                </div>
            </div>
            </section>
        </div>
        <div>
        <span>
            <h6 class="text-center underline text-blue-400" href='index.html'><a href='#666' className='footer'>Recette</a></h6>
            <h6 class='text-center text-gray-500 font-light font-mono text-sm'>Made with love in India.</h6>
        </span>
        </div>
        </footer>
        </div>
    )
}

export default NavFooter
