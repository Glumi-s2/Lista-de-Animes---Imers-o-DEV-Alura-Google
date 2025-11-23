document.addEventListener('DOMContentLoaded', () => {
    const animes = [
        {
            title: "Attack on Titan",
            year: "2013",
            description: "A humanidade sobrevive atrás de enormes muralhas, protegidas contra os Titãs, criaturas que devoram humyears. A história segue Eren Yeager, que jura exterminar os Titãs após um deles destruir sua cidade natal e matar sua mãe.",
            link: "https://www.crunchyroll.com/pt-br/series/GR751KNZY/attack-on-titan",
            protagonistImage: "https://i5.walmartimages.com/seo/Attack-On-Titan-Japanese-Anime-Poster-Print-Key-Art-Regular-24-X-36_e74beab2-37a6-44a4-ac5c-b6f3d222bc35.968a847bd29fb37646da893eb1142793.jpeg",
            protagonistAlt: "Eren Yeager"
          },
          {
            title: "One Punch Man",
            year: "2015",
            description: "Saitama é um herói por diversão que treinou tanto que ficou forte o suficiente para derrotar qualquer inimigo com um único soco. Entediado com a falta de desafios, ele busca um oponente à sua altura.",
            link: "https://www.crunchyroll.com/pt-br/series/G63K98PZ6/one-punch-man",
            protagonistImage: "https://i.pinimg.com/474x/f5/6b/ea/f56bea09d58d82db247e1fd8f808f702.jpg",
            protagonistAlt: "Saitama"
          },
          {
            title: "Jujutsu Kaisen",
            year: "2020",
            description: "Yuji Itadori, um estudante do ensino médio, se envolve com uma sociedade secreta de Feiticeiros Jujutsu para eliminar uma Maldição poderosa. Para isso, ele engole um dedo amaldiçoado e ganha poderes.",
            link: "https://www.crunchyroll.com/pt-br/series/GRDV0019R/jujutsu-kaisen",
            protagonistImage: "https://i5.walmartimages.com/seo/Jujutsu-Kaisen-One-Sheet-Wall-Poster-22-375-x-34_d53e9fd6-b612-4698-9931-8c10c092d321.0c0968c3223c7981792b6e702c5d3f5c.jpeg",
            protagonistAlt: "Yuji Itadori"
          },
          {
            title: "Death Note",
            year: "2006",
            description: "Um estudante do ensino médio encontra um caderno sobrenatural que lhe permite matar qualquer pessoa cujo nome ele escreva nele. Ele decide usar o caderno para livrar o mundo de criminosos, mas suas ações o colocam em conflito com um detetive genial que tenta detê-lo.",
            link: "https://www.crunchyroll.com/pt-br/series/G6QWD3EE6/death-note",
            protagonistImage: "https://m.media-amazon.com/images/I/61FscMj+lSL.jpg",
            protagonistAlt: "Light Yagami"
          },
          {
            title: "Demon Slayer: Kimetsu no Yaiba",
            year: "2019",
            description: "Após ter sua família massacrada por demônios e sua irmã Nezuko transformada em um, Tanjiro Kamado parte em uma jornada para se tornar um caçador de demônios e encontrar uma cura para sua irmã.",
            link: "https://www.crunchyroll.com/pt-br/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba",
            protagonistImage: "https://static.posters.cz/image/1300/258584.jpg",
            protagonistAlt: "Tanjiro Kamado"
          },
          {
            title: "Naruto Shippuden",
            year: "2007",
            description: "Naruto Uzumaki, agora mais velho, retorna à Vila da Folha. Ele se reúne com seus amigos para enfrentar a Akatsuki, que busca capturar as Bestas com Caudas, enquanto lida com a busca por seu amigo Sasuke Uchiha.",
            link: "https://www.crunchyroll.com/pt-br/series/GYQ4MW246/naruto-shippuden",
            protagonistImage: "https://m.media-amazon.com/images/I/81Zj-BWityL.jpg",
            protagonistAlt: "Naruto Uzumaki"
          },
          {
            title: "Fullmetal Alchemist: Brotherhood",
            year: "2009",
            description: "Os irmãos Edward e Alphonse Elric buscam a Pedra Filosofal para restaurar seus corpos após uma tentativa fracassada de transmutação humana. Sua busca os leva a descobrir uma conspiração sombria que ameaça o país.",
            link: "https://www.crunchyroll.com/pt-br/series/GRGGPG93R/fullmetal-alchemist-brotherhood",
            protagonistImage: "https://m.media-amazon.com/images/I/71YYVENqPaL.jpg",
            protagonistAlt: "Edward Elric"
          },
          {
            title: "One Piece",
            year: "1999",
            description: "Monkey D. Luffy, um jovem que ganhou poderes de borracha, parte com sua tripulação para encontrar o tesouro 'One Piece' e se tornar o Rei dos Piratas.",
            link: "https://www.crunchyroll.com/pt-br/series/GRMG8ZQZR/one-piece",
            protagonistImage: "https://images-cdn.ubuy.co.in/633ff1157e3fbc25557517c8-one-piece-poster-japanese-anime-posters.jpg",
            protagonistAlt: "Monkey D. Luffy"
          },
          {
            title: "My Hero Academia",
            year: "2016",
            description: "Em um mundo onde quase todos têm superpoderes, Izuku Midoriya nasceu sem nenhum. Determinado a se tornar um herói, ele recebe o poder do maior herói de todos, All Might, e entra em uma escola para heróis.",
            link: "https://www.crunchyroll.com/pt-br/series/G6NQ5DWZ6/my-hero-academia",
            protagonistImage: "https://m.media-amazon.com/images/I/71gDaWSC8zL._AC_UF894,1000_QL80_.jpg",
            protagonistAlt: "Izuku Midoriya"
          },
          {
            title: "Spy x Family",
            year: "2022",
            description: "Um espião precisa construir uma família de mentira para uma missão, sem saber que sua 'filha' é uma telepata e sua 'esposa' é uma assassina profissional.",
            link: "https://www.crunchyroll.com/pt-br/series/G4PH0WXVJ/spy-x-family",
            protagonistImage: "https://m.media-amazon.com/images/I/61njdUMRoCL._AC_UF894,1000_QL80_.jpg",
            protagonistAlt: "Loid Forger"
          },
          {
            title: "Chainsaw Man",
            description: "Denji, um jovem extremamente pobre, se funde ao demônio Pochita. Transformado no Chainsaw Man, ele é recrutado por caçadores de demônios, buscando uma vida simples e seus desejos mais básicos.",
            year: "2022",
            link: "https://www.crunchyroll.com/pt-br/series/GVDHX8QNW/chainsaw-man?srsltid=AfmBOoroz3yeKbBIofXgr-hnuH55eHKJSpOFswL5_I21PmD5ROV9V1vl",
            protagonistImage: "https://preview.redd.it/official-posters-for-chainsaw-man-the-movie-reze-arc-v0-vjntjx2qkb8e1.jpg?width=640&crop=smart&auto=webp&s=d6eab7e2b6309596151b0d333288734ed34c12dc",
            protagonistAlt: "Denji"
          },
          {
            title: "Hunter x Hunter",
            description: "Para encontrar seu lendário pai, o jovem Gon Freecss se aventura a se tornar um Hunter, um explorador de elite. Prepare-se para testes mortais, amizades inquebráveis e um sistema de poder genial (Nen).",
            year: "2011",
            link: "https://www.crunchyroll.com/pt-br/series/GY3VKX1MR/hunter-x-hunter?srsltid=AfmBOorJF05Xh_6JpOyPIsbMEJrkEEw5MxMb4DVvFvs1mQZ5vBtkHxK4",
            protagonistImage: "https://m.media-amazon.com/images/I/71CirqcvjKL._AC_UF894,1000_QL80_.jpg",
            protagonistAlt: "Gon Freecss"
          },
          {
            title: "Haikyu!!",
            description: "O pequeno Shoyo Hinata, inspirado pelo “Pequeno Gigante”, entra para o clube de vôlei. Sua determinação e salto explosivo, ao lado de seu rival/parceiro Kageyama, o levarão ao topo do esporte colegial.",
            year: "2014",
            link: "https://www.crunchyroll.com/pt-br/series/GY8VM8MWY/haikyu?srsltid=AfmBOopfXFAwYGyFuQORd6VaStLWHGwZ68LCwlTn1HK6jUgrtajHmBjV",
            protagonistImage: "https://m.media-amazon.com/images/I/810HuvPtHNL.jpg",
            protagonistAlt: "Shoyo Hinata"
          },
          {
            title: "Steins;Gate",
            description: "Um cientista autoproclamado e sua equipe acidentalmente inventam uma máquina que pode enviar mensagens ao passado. O que começa como um jogo logo se transforma em uma luta desesperada para evitar catástrofes temporais.",
            year: "2011",
            link: "https://www.crunchyroll.com/pt-br/series/GYWE7W5GY/steinsgate?srsltid=AfmBOopGTgX78-TNS7gDbWOPJ7MFxfnzmeon0OMCWGfc0r6Q-KMICjS3",
            protagonistImage: "https://upload.wikimedia.org/wikipedia/pt/3/3d/Steins%3BGate_anime_poster.jpg",
            protagonistAlt: "Rintaro Okabe"
          },
          {
            title: "Mob Psycho 100",
            description: "Shigeo Kageyama, conhecido como Mob, é um estudante com imenso poder psíquico, mas que tenta viver uma vida normal. Quando suas emoções reprimidas atingem 100%, o mundo estremece. Uma obra-prima de comédia e ação sobrenatural.",
            year: "2016",
            link: "https://www.crunchyroll.com/pt-br/series/GY190DKQR/mob-psycho-100?srsltid=AfmBOorKdi7ok8kfNcacc1UJb-8xiZpmGqAt0P6Qctze-6oXEFy4p8KE",
            protagonistImage: "https://m.media-amazon.com/images/I/71QPSuw+DYL.jpg",
            protagonistAlt: "Shigeo Kageyama (Mob)"
          },
          {
            title: "Vinland Saga",
            description: "Ambientado na era Viking, Thorfinn cresce no campo de batalha buscando vingança pela morte de seu pai. Uma épica e brutal saga sobre guerra, honra e, eventualmente, a busca por um propósito maior que a violência.",
            year: "2019",
            link: "https://www.crunchyroll.com/pt-br/series/GEXH3WKK0/vinland-saga?srsltid=AfmBOooYUt8uoyaTfPZQmGHZIg8QozpsHcs6xJpn9Be08Ljyd-Jd_aCX",
            protagonistImage: "https://m.media-amazon.com/images/I/81rPC0owmrL.jpg",
            protagonistAlt: "Thorfinn"
          },
          {
            title: "Tokyo Ghoul",
            description: "Após um encontro com uma criatura devoradora de humyears (Ghoul), o estudante Ken Kaneki se torna um híbrido. Ele agora deve se adaptar à sociedade dos Ghouls, lutando por sua identidade em um mundo que o caça.",
            year: "2014",
            link: "https://www.crunchyroll.com/pt-br/series/G6NV7Z50Y/tokyo-ghoul?srsltid=AfmBOoqvCogCcHN7k-DJPUPXKwfccakbH72tMHkb0Kaa84CknllC8Zkn",
            protagonistImage: "https://img.elo7.com.br/product/zoom/1F2E1D9/big-poster-anime-tokyo-ghoul-tamanho-90x-0-cm-lo11-tokyo-ghoul.jpg",
            protagonistAlt: "Ken Kaneki"
          },
          {
            title: "Re:Zero",
            description: "Transportado para um mundo de fantasia, o otaku Subaru Natsuki descobre que possui a habilidade de “Retorno pela Morte”. Ele deve usar essa maldição para salvar aqueles que ama de um destino cruel e inevitável.",
            year: "2016",
            link: "https://www.crunchyroll.com/pt-br/series/GRGG9798R/rezero--starting-life-in-another-world-?srsltid=AfmBOorERHuwjyXl4NWz-F3g21p-Fim1L_xTYbUF-v1NiKCr63zSlcWJ",
            protagonistImage: "https://img.elo7.com.br/product/zoom/1EE4310/big-poster-anime-re-zero-tamanho-90x-0-cm-lo025-manga.jpg",
            protagonistAlt: "Subaru Natsuki"
          },
          {
            title: "Code Geass",
            description: "Lelouch Lamperouge, um príncipe exilado, recebe o poder do Geass – a capacidade de fazer qualquer pessoa obedecer a qualquer ordem. Ele lidera uma rebelião para destruir o império tirânico de seu pai, custe o que custar.",
            year: "2006",
            link: "https://www.crunchyroll.com/pt-br/series/GY2P9ED0Y/code-geass?srsltid=AfmBOopjgBOb8dz1lspOlUlADOCr_lbhFjC1rAVoz8Eli2Gt_xC_TssL",
            protagonistImage: "https://m.media-amazon.com/images/I/81CGyh7P9UL._AC_UF894,1000_QL80_.jpg",
            protagonistAlt: "Lelouch Lamperouge"
          },
          {
            title: "Fairy Tail",
            description: "Natsu Dragneel, um Mago Dragão Slayer, e seus amigos da guilda Fairy Tail vivem as maiores aventuras, focados na força da amizade e na destruição de vilões com magia explosiva. Um clássico Shonen de fantasia.",
            year: "2009",
            link: "https://www.crunchyroll.com/pt-br/series/G6DQDD3WR/fairy-tail?srsltid=AfmBOoriSINC_fNxEwa7YL24uTGhxmfBTcdpnKSVa0lfOJIlSUJ0HtTu",
            protagonistImage: "https://m.media-amazon.com/images/I/717F7-S9FqL.jpg",
            protagonistAlt: "Natsu Dragneel"
          },
          {
            title: "Black Clover",
            description: "Em um mundo onde magia é tudo, Asta nasceu sem nenhum poder. Determinado a se tornar o Rei Mago, ele recebe um grimório anti-magia e prova que a persistência e o esforço superam o talento inato.",
            year: "2017",
            link: "https://www.crunchyroll.com/pt-br/series/GRE50KV36/black-clover?srsltid=AfmBOooeAlmuUAWLWUnG8Whd-g7tCoDbialn0wQLdXxJYfSX8Zs_J0eK",
            protagonistImage: "https://img.elo7.com.br/product/zoom/2C15759/big-poster-anime-black-clover-lo001-tamanho-90x60-cm-presente-nerd.jpg",
            protagonistAlt: "Asta"
          },
          {
            title: "Dragon Ball Z",
            description: "A saga que definiu os animes de luta. Goku, agora adulto, e seus amigos defendem a Terra contra ameaças cósmicas e demônios, tornando-se mais fortes a cada batalha explosiva e transformadora.",
            year: "1989",
            link: "https://www.crunchyroll.com/pt-br/series/GR9PWMMW3",
            protagonistImage: "https://m.media-amazon.com/images/I/71IIXq2QNaS._AC_SL1000_.jpg",
            protagonistAlt: "Goku"
          },
          {
            title: "Psycho-Pass",
            description: "Em um futuro onde o crime é medido pelo 'Psycho-Pass' de cada cidadão, a Inspetora Akane deve questionar a justiça do sistema Sibyl, que julga e pune a propensão ao crime antes que ele aconteça.",
            year: "2012",
            link: "https://www.crunchyroll.com/pt-br/series/GR75253JY/psycho-pass?srsltid=AfmBOoog5QkuqjL_E9bmtnfPaVypjVBFHFotoY54UBcelbilV10K4YAG",
            protagonistImage: "https://m.media-amazon.com/images/M/MV5BNjQ1OTNkZGYtODVlMC00NWI0LWJiYjItMzM4M2U4NjY0ZTYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            protagonistAlt: "Akane Tsunemori"
          },
          {
            title: "Cowboy Bebop",
            description: "Quatro caçadores de recompensas espaciais viajam pela galáxia em busca de dinheiro, enquanto fogem de seus passados sombrios. Uma mistura estilosa de jazz, ação e drama existencial que é atemporal.",
            year: "1998",
            link: "https://www.crunchyroll.com/pt-br/series/GYVNXMVP6/cowboy-bebop?srsltid=AfmBOor3e8-JmOnGvW8iFyxyUzIjKXkAPGLAOQy3xmnbmn8V66Z0cYOx",
            protagonistImage: "https://m.media-amazon.com/images/I/71heVvvMJvL._AC_UF894,1000_QL80_.jpg",
            protagonistAlt: "Spike Spiegel"
          },
          {
            title: "Neon Genesis Evangelion",
            description: "Quando criaturas monstruosas (Anjos) atacam Tóquio-3, o jovem Shinji Ikari é forçado a pilotar o EVA-01. Uma obra-prima psicológica complexa que aborda guerra, depressão e o que significa ser humyear.",
            year: "1995",
            link: "https://www.crunchyroll.com/pt-br/news/tag/Neon%20Genesis%20Evangelion?srsltid=AfmBOop82s8rlNh7gbUsLRlTN_xsaf4gO4zyaDI7yoojJtKq3atzsmYattps://www.netflix.com/title/80060011",
            protagonistImage: "https://i5.walmartimages.com/seo/Neon-Genesis-Evangelion-The-End-of-Evangelion-Poster_12e267d0-45b2-4fa8-b23f-45192f0aef25.264e279884e5a96f5690f49a2dca336e.jpeg",
            protagonistAlt: "Shinji Ikari"
          },
          {
            title: "Mushoku Tensei: Jobless Reincarnation",
            description: "Um NEET de 34 years morre e reencarna em um mundo de fantasia como o bebê Rudeus. Ele decide usar sua segunda chance para viver a vida ao máximo, dominando a magia e corrigindo seus erros passados.",
            year: "2021",
            link: "https://www.crunchyroll.com/pt-br/series/G24H1N3MP/mushoku-tensei-jobless-reincarnation?srsltid=AfmBOor5cjqbNXbVCJ3oTUVRb_nkoz8T2rKqIaq1mNRoUGweyFfuPgHL",
            protagonistImage: "https://m.media-amazon.com/images/M/MV5BYWQwNjk3MDItNDAxMS00YTQ2LWEyNDctMGYyZTE5OGQxNGQ1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            protagonistAlt: "Rudeus Greyrat"
          },
          {
            title: "Ranking of Kings",
            description: "Bojji é um príncipe pequeno e surdo, ridicularizado por seu povo. Com a ajuda de Kage (uma sombra), ele embarca em uma jornada comovente e épica para se tornar o melhor rei, provando seu valor e coragem interior.",
            year: "2021",
            link: "https://www.crunchyroll.com/pt-br/series/G79H23W70/ranking-of-kings?srsltid=AfmBOoonUDNez9HLWVodKLmu-Z5vI9D6UDINaQzGhN7Nc2M8o8biWpmD",
            protagonistImage: "https://m.media-amazon.com/images/M/MV5BNjM3OWRmODQtODVjYS00YzY5LWFiNmQtOGExM2M4OWQ3Nzk1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            protagonistAlt: "Bojji"
          },
          {
            title: "Kaguya-sama: Love Is War",
            description: "Kaguya Shinomiya e Miyuki Shirogane são gênios que se amam, mas acreditam que confessar primeiro é sinal de fraqueza. Trava-se uma guerra mental hilária, onde o objetivo é forçar o outro a se declarar.",
            year: "2019",
            link: "https://www.crunchyroll.com/pt-br/series/GRJ0J828Y/kaguya-sama-love-is-war?srsltid=AfmBOopoXTcABs3Ly0pLucjQAF_KK3JeQo4a2CEitWJ4txgkrDXa5Fh5",
            protagonistImage: "https://m.media-amazon.com/images/M/MV5BMTM1ZWViNWMtZWY2ZC00YmYyLTk1ZGEtMzRjOWI2YTM1OTI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            protagonistAlt: "Miyuki Shirogane"
          },
          {
            title: "Dr. Stone",
            description: "Toda a humanidade é transformada em pedra. Milênios depois, o gênio científico Senku Ishigami desperta, determinado a reconstruir a civilização do zero e libertar a humanidade usando apenas o poder da ciência.",
            year: "2019",
            link: "https://www.crunchyroll.com/pt-br/series/GYEXQKJG6/dr-stone?srsltid=AfmBOoqBWVCp4NpRo7At5amYULaqSitijTmWrV1ogaUeK41PJMqr298M",
            protagonistImage: "https://m.media-amazon.com/images/I/71jXvQv9XlL._AC_UF894,1000_QL80_.jpg",
            protagonistAlt: "Senku Ishigami"
          },
          {
            title: "Blue Lock",
            description: "Após um fracasso na Copa do Mundo, 300 atacantes de elite são recrutados em um programa radical para criar o egoísta e melhor atacante do mundo. O futuro do futebol japonês está em jogo neste Battle Royale esportivo.",
            year: "2022",
            link: "https://www.crunchyroll.com/pt-br/series/G4PH0WEKE/blue-lock?srsltid=AfmBOopsKoeb0yrMxlSPwfAZFwf9-2uGYOA-aVZam3ZJYeTY25znvDEC",
            protagonistImage: "https://br.web.img2.acsta.net/img/7e/99/7e9994eb0465a56f1099d1bb0b814c9e.jpg",
            protagonistAlt: "Yoichi Isagi"
          },
          {
            title: "Oshi no Ko",
            description: "Um médico e sua paciente morrem e reencarnam como filhos de sua idol favorita. Uma crítica sombria, emocionante e fascinante sobre a indústria do entretenimento, seus segredos e a busca pela verdade.",
            year: "2023",
            link: "https://www.netflix.com/br/title/81684733",
            protagonistImage: "https://i.ebayimg.com/images/g/e-EAAOSwrsVmhog1/s-l1200.jpg",
            protagonistAlt: "Aqua Hoshino"
          },
          {
            title: "Zom 100: Bucket List of the Dead",
            description: "Akira está esgotado pelo seu trabalho corporativo tóxico. Quando um apocalipse zumbi atinge Tóquio, ele finalmente se sente livre e decide completar uma lista de 100 desejos antes que seja tarde demais.",
            year: "2023",
            link: "https://www.crunchyroll.com/pt-br/series/GJ0H7QGQK/zom-100-bucket-list-of-the-dead?srsltid=AfmBOoqDB8Twly2XyqLhAYgVJE9MCqGXjRUF3m87kV_XwMhCm3ORUp26",
            protagonistImage: "https://a.storyblok.com/f/178900/1064x1501/1a33be7d15/zom-100-bucket-list-of-the-dead-key-visual.png/m/filters:quality(95)format(webp)",
            protagonistAlt: "Akira Tendo"
          },
          {
            title: "Cyberpunk: Edgerunners",
            description: "Ambientado na futurista e violenta Night City, David Martinez se torna um mercenário (Edgerunner) para sobreviver. Uma jornada eletrizante de implantes cibernéticos, traição e sacrifícios desesperados.",
            year: "2022",
            link: "https://www.netflix.com/br-en/title/81054853",
            protagonistImage: "https://m.media-amazon.com/images/I/71OeoFoXILL._AC_UF894,1000_QL80_.jpg",
            protagonistAlt: "David Martinez"
          },
          {
            title: "The Ancient Magus' Bride",
            description: "Chise Hatori, uma garota que perdeu a esperança, se vende em um leilão e é comprada por Elias, um magus com cabeça de crânio. Ela se torna sua aprendiz e futura noiva neste mundo de magia, fadas e mistério.",
            year: "2017",
            link: "https://www.crunchyroll.com/pt-br/series/GRZXQJJ8Y/the-ancient-magus-bride?srsltid=AfmBOooCTbaATsfbtHvBShqjbjN6jq1FUGE5kqh3L-pDF7khS5XPKYjV",
            protagonistImage: "https://m.media-amazon.com/images/M/MV5BZjUzM2U3YjctMDg5My00NTE3LWE5ZGUtOTRkYWJlM2YyOTk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            protagonistAlt: "Chise Hatori"
          },
          {
            title: "Aoashi",
            description: "Ashito Aoi é um gênio do futebol com um temperamento difícil. Ele é descoberto e levado a Tóquio para se juntar à equipe juvenil, começando sua intensa jornada para entender o futebol tático e profissional.",
            year: "2022",
            link: "https://www.crunchyroll.com/pt-br/series/G4PH0WX5J/aoashi?srsltid=AfmBOooeFxrsy4RrsdkhFK9fAeVF7jAfU964p7bxiO91TOuTwnHWJN1v",
            protagonistImage: "https://m.media-amazon.com/images/M/MV5BZTAwNDJjMGMtZGExNy00ZDZlLTlmYTMtZWNlNDc5MDRlZGVhXkEyXkFqcGc@._V1_.jpg",
            protagonistAlt: "Ashito Aoi"
          }
    ];

    const cardContainer = document.querySelector('.card-container');
    const searchInput = document.getElementById('caixa-busca');
    const searchButton = document.getElementById('botao-busca');

    function renderAnimes(animeList) {
        cardContainer.innerHTML = ''; 

        if (animeList.length === 0) {
            cardContainer.innerHTML = '<p class="no-results">Nenhum anime encontrado.</p>';
            return;
        }

        animeList.forEach(anime => {
            const card = document.createElement('article');
            card.className = 'card';

            card.innerHTML = `
                <h2>${anime.title}</h2>
                <div class="card-body">
                    <img src="${anime.protagonistImage}" alt="${anime.protagonistAlt}" class="protagonist-image">
                    <div class="card-text">
                        <p class="year">${anime.year}</p>
                        <p>${anime.description}</p>
                    </div>
                </div>
                <a href="${anime.link}" target="_blank">Saiba mais</a>
            `;
            cardContainer.appendChild(card);
        });
    }

    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredAnimes = animes.filter(anime => anime.title && anime.title.toLowerCase().includes(searchTerm));
        renderAnimes(filteredAnimes);
    }

    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keyup', (event) => event.key === 'Enter' && handleSearch());

    renderAnimes(animes);
});