var footerHTML = `
    <!-- # footer
            ================================================== -->
            <footer class="s-footer">
                <div class="row s-footer__content">
                    <div class="column xl-6 lg-6 md-12 s-footer__block s-footer__about">
                        <h3>Chi sono</h3>
                        <p>
                            Sono Sebastian Tanase, un software engineer con la passione per l'innovazione e il desiderio di trasformare idee in realtà digitali. Con una solida esperienza nel settore tecnologico, offro soluzioni su misura per le aziende che desiderano migliorare la loro efficienza e competitività attraverso l'uso della tecnologia.
                        </p>
                    </div>
                    <div class="column xl-3 lg-6 md-12 s-footer__block s-footer__site-links">
                        <h3>Link Utili</h3>
                        <ul class="link-list">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="services.html">Servizi</a></li>
                            <li><a href="about.html">Chi sono</a></li>
                            <li><a href="contact.html">Contatti</a></li>
                        </ul>
                    </div>
                    <div class="column xl-3 lg-6 md-12 tab-12 s-footer__block s-footer__newsletter">
                        <h3>Newsletter</h3>

                        <p>
                            Iscriviti alla newsletter per rimanere aggiornato sulle ultime novità, articoli e offerte speciali.
                        </p>

                        <div class="subscribe-form">
                            <form id="mc-form" class="mc-form">
                                <input type="email" name="EMAIL" id="mce-EMAIL" class="u-fullwidth text-center" placeholder="Il tuo indirizzo email" title="Il dominio dell'email non è valido (la parte dopo il @)." pattern='^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\\.\\w{2,})+$' required>
                                <input type="submit" name="subscribe" value="Iscriviti" class="btn btn--primary btn--small u-fullwidth">
                                <!-- <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_cdb7b577e41181934ed6a6a44_9a91cfe7b3" tabindex="-1" value=""></div> -->
                                <div class="mc-status"></div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="row s-footer__bottom">
                    <div class="column xl-6 lg-12">
                        <ul class="s-footer__social social-list">
                            <li>
                                <a href="#0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"><path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592 c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20 c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z"></path></svg>
                                    <span class="u-screen-reader-text">Facebook</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/sebastiantanasee/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"><path d="M11.999,7.377c-2.554,0-4.623,2.07-4.623,4.623c0,2.554,2.069,4.624,4.623,4.624c2.552,0,4.623-2.07,4.623-4.624 C16.622,9.447,14.551,7.377,11.999,7.377L11.999,7.377z M11.999,15.004c-1.659,0-3.004-1.345-3.004-3.003 c0-1.659,1.345-3.003,3.004-3.003s3.002,1.344,3.002,3.003C15.001,13.659,13.658,15.004,11.999,15.004L11.999,15.004z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533,6.111c-0.469-1.209-1.424-2.165-2.633-2.632c-0.699-0.263-1.438-0.404-2.186-0.42 c-0.963-0.042-1.268-0.054-3.71-0.054s-2.755,0-3.71,0.054C7.548,3.074,6.809,3.215,6.11,3.479C4.9,3.946,3.945,4.902,3.477,6.111 c-0.263,0.7-0.404,1.438-0.419,2.186c-0.043,0.962-0.056,1.267-0.056,3.71c0,2.442,0,2.753,0.056,3.71 c0.015,0.748,0.156,1.486,0.419,2.187c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45 c0.963,0.042,1.268,0.055,3.71,0.055s2.755,0,3.71-0.055c0.747-0.015,1.486-0.157,2.186-0.419c1.209-0.469,2.164-1.424,2.633-2.633 c0.263-0.7,0.404-1.438,0.419-2.186c0.043-0.962,0.056-1.267,0.056-3.71s0-2.753-0.056-3.71C20.941,7.57,20.801,6.819,20.533,6.111z M19.315,15.643c-0.007,0.576-0.111,1.147-0.311,1.688c-0.305,0.787-0.926,1.409-1.712,1.711c-0.535,0.199-1.099,0.303-1.67,0.311 c-0.95,0.044-1.218,0.055-3.654,0.055c-2.438,0-2.687,0-3.655-0.055c-0.569-0.007-1.135-0.112-1.669-0.311 c-0.789-0.301-1.414-0.923-1.719-1.711c-0.196-0.534-0.302-1.099-0.311-1.669c-0.043-0.95-0.053-1.218-0.053-3.654 c0-2.437,0-2.686,0.053-3.655c0.007-0.576,0.111-1.146,0.311-1.687c0.305-0.789,0.93-1.41,1.719-1.712 c0.534-0.198,1.1-0.303,1.669-0.311c0.951-0.043,1.218-0.055,3.655-0.055c2.437,0,2.687,0,3.654,0.055 c0.571,0.007,1.135,0.112,1.67,0.311c0.786,0.303,1.407,0.925,1.712,1.712c0.196,0.534,0.302,1.099,0.311,1.669 c0.043,0.951,0.054,1.218,0.054,3.655c0,2.436,0,2.698-0.043,3.654H19.315z"></path></svg>
                                    <span class="u-screen-reader-text">Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/tanasesebastian/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.271c-.966 0-1.75-.805-1.75-1.729s.784-1.729 1.75-1.729 1.75.805 1.75 1.729-.784 1.729-1.75 1.729zm13.5 10.271h-3v-4.816c0-1.151-.023-2.632-1.604-2.632-1.606 0-1.851 1.254-1.851 2.55v4.898h-3v-9h2.881v1.233h.041c.401-.759 1.378-1.558 2.835-1.558 3.031 0 3.594 1.995 3.594 4.59v4.735z"></path>
                                    </svg>
                                    <span class="u-screen-reader-text">LinkedIn</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/TanaseSebastian">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:">
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.292-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.625-5.475 5.92.429.37.823 1.102.823 2.222 0 1.606-.014 2.896-.014 3.293 0 .322.218.694.825.577 4.765-1.585 8.2-6.084 8.2-11.385 0-6.627-5.373-12-12-12z"></path>
                                    </svg>
                                    <span class="u-screen-reader-text">GitHub</span>
                                </a>
                            </li>
                        </ul> <!-- end s-footer__social -->
                    </div>
                    <div class="column xl-6 lg-12">
                        <p class="ss-copyright">
                            <span>© Copyright Sebastian Tanase 2022</span>
                            <span>Design by <a href="https://it.linkedin.com/in/tanasesebastian"> Sebastian Tanase</a></span>
                        </p>
                    </div>

                    <div class="ss-go-top">
                        <a class="smoothscroll" title="Back to Top" href="#top">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 11 12 6 7 11"></polyline><line x1="12" y1="18" x2="12" y2="6"></line></svg>
                        </a>
                    </div> <!-- end ss-go-top -->
                </div>

            </footer> <!-- end s-footer -->
    `;

document.body.insertAdjacentHTML("beforeend", footerHTML);

