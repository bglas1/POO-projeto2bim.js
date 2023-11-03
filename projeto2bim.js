class Animal{
    constructor(nome,peso,comprimento,tmv,habitat){
        this.nome=nome;
        this.peso=peso;
        this.comprimento=comprimento;
        this.tmv=tmv;
        this.habitat=habitat;
       }
}


console.log("Bem-vindos à plataforma que vai trazer uma experiência única para todos vocês, aqui vocês podem ver espécies de animais, de todos os grupos  de animais existentes, como aves e peixes. Vejamos a seguir alguns exemplos para dar início à essa experiência incrível!");


class Mamifero extends Animal{
    constructor(nome,peso,comprimento,tmv,habitat, pelagem, glandulasmamarias, ){
        super(nome,peso,comprimento,tmv,habitat);
        this.pelagem=pelagem;
        this.glandulasmamarias=glandulasmamarias;
    }
}

let mamifero1=new Mamifero("Baleia Orca","onze toneladas","oito metros","50 à 90 anos","oceanos"," ","da cabeça ao ânus");

let mamifero2=new Mamifero("Golfinho","150 kg","dois metros e vinte centímetros","de 20 à 35 anos","ambientes marinhos"," ","dos dois lados da abertura genital");

let mamifero3=new Mamifero("Cachorro","1,4 à 110 kg, por sua diversidade de raças.","15 cm à 110 metros","10 à 13 anos","diversos lugares, variando de uma casa, para áreas florestais, porém habitadas pelo homem.","vaiável, podendo ser escura, clara, longa, curta, etc...","na região torácica até à região inguinal");

let mamifero4=new Mamifero("Anta","250 kg","1,10 metros","até 35 anos","florestas, campos e cerrado, sempre próximo à lugares com água ou úmidos.","de coloração marrom escura e orelhas com bordas brancas.","na região torácica até à região inguinalao.");


console.log("O animal da vez é" nome , "pesa em torno de" peso , "e tem cerca de" comprimento , "vive em média" tmv , "vivem em" habitat , "sua pelagem é" pelagem , "e pra finalizar,  sua glandulas mamárias ficam localizadas" glandulasmamarias .)


class Reptil extends Animal{
    constructor(nome,peso,comprimento,tmv,habitat, impermeabilidade, ectotermia){
        super(nome,peso,comprimento,tmv,habitat);
        this.impermeabilidade=impermeabilidade;
        this.ectotermia=ectotermia;
    }
}

let reptil1=new Reptil("serpente", "5 à 10 kg", "1 à 2 metros", "10 à 15 anos", "dependendo da serpente, pode variar entre arbustos e arvores, subsolo e sobre o solo", "possui impermeabilidade, por conta da pele escamosa e de uma substância chamada cerume", "possui a temperatura corporal mudada pelo ambiente externo".);

let reptil2=new Reptil("crocodilo", "35 à 230 kg", "os machos vão de 6 à 7 metros, enquanto as fêmeas só crescem até 3 metros", "60 anos", "lagos, pantanos e rios", "sua impermeabilidade é possível por conta da sua pele espessa e escamosa", "possui a temperatura corporal mudada pelo ambiente externo".);

let reptil3=new Reptil("lagarto", "2 à 4 kg", "pode variar de 2 cm à 3 metros", "5 à 10 anos", "regiões tropicais úmidas ou desertos secos", "sua impermeabilidade é por conta de sua pele escamosa e uma substância oleosa que seu corpo produz", "possui a temperatura corporal mudada pelo ambiente externo".);

let reptil4=new Reptil("tartaruga", "40 à 400 kg", "80 cm à 2 metros", "67 anos", "águas costeiras, ilhas ou baías", "sua impermeabilidade é por sua pele escamosa e por conter queratina nela", "possui a temperatura corporal mudada pelo ambiente externo".);


console.log("O animal da vez é" nome , "pesa em torno de" peso , "e tem cerca de" comprimento , "vive em média" tmv , "vivem em" habitat , "além disso" impermeabilidade , "e" ectotermia .)


class Ave extends Animal{
    constructor(nome,peso,comprimento,tmv,habitat, voo,asas){
        super(nome,peso,comprimento,tmv,habitat);
        this.voo=voo;
        this.asas=asas;
    }
}

let ave1=new Ave("Flamingo", "2 à 4 kg", "1,2 à 1,4 metros", "20 à 30 anos", "em ambientes aquáticos, como lagos e lagoas rasas.", "voo planador.", " asas que são consideradas asas de voo planador".);

let ave2=new Ave("Pavão", "4 à 6 kg", "1,2 à 1,5 metros", "15 anos", "florestas, savanas e áreas próximas à água", "voo de curtas distâncias", "asas curtas e arredondadas".);

let ave3=new Ave("pinguim", "2 à 40 kg", "30 cm à 1,2 metros", "15 à 20 anos, mas algumas espécies podem viver até 30 anos", "regiões frias, como Antártica e áreas costeiras de climas temperados", "os pinguins são aves que não podem voar, porém são ótimos nadadores", "asas natatórias, que são curtas e rígidas.".);

let ave4=new Ave("Beija-flor", "2 à 6 gramas", "7 à 13 centímetros", "3 à 5 anos", "tropicais e subtropicais, como florestas, jardins e áreas com flores abundantes.", " podem voar rapidamente em várias direções, incluindo para trás e para os lados", "são consideradas asas de voo rápido e ágil");


console.log("O animal da vez é" nome , "pesa em torno de" peso , "e tem cerca de" comprimento , "vive em média" tmv , "vivem em" habitat , "possuem" voo , "e" asas . )


class Peixe extends Animal{
    constructor(nome,peso,comprimento,tmv,habitat, pele,respiracao){
        super(nome,peso,comprimento,tmv,habitat);
        this.pele=pele;
        this.respiracao=respiracao
    
    }
}

let peixe1=new Peixe("peixe-espada", "90 e 180 kg", "3 metros", "9 à 12 anos", "vive nas águas temperadas e tropicais dos oceanos Atlântico, Índico e Pacífico", "lisa e escamosa", "respiração branquial");

let peixe2=new Peixe("tubarão branco", "1.100 a 2.400 kg", "4,5 e 6 metros, podendo chegar a mais de 7 metros", "30 à 40 anos", "vive nas águas costeiras e oceânicas", " áspera e coberta por dentículos dérmicos.", "respiração branquial");

let peixe3=new Peixe("peixe palhaço", "100 gramas", "7 à 11 cm", "3 à 5 anos", "recifes de coral no Oceano Pacífico e no Oceano Índico.", "pele escamosa e fina", "respiração branquial".);

let peixe4=new Peixe("peixe betta", "25 gramas", "entre 5 e 7 cm", "2 à 4 anos, mas pode chegar à 5 anos com cuidados adequados.", " vive nas águas tropicais da Tailândia e do Sudeste Asiático.", "pele escamosa e colorida", "respira através de brânquias, mas também pode subir à superfície para respirar ar atmosférico através de seu órgão labirinto.");


console.log("O animal da vez é" nome , "pesa em torno de" peso , "e tem cerca de" comprimento , "vive em média" tmv , "vivem em" habitat , "possuem" pele "e" respiração .)


class Anfibio extends Animal{
    constructor(nome,peso,comprimento,tmv,habitat, tpdepele,sistemarespiratorio){
        super(nome,peso,comprimento,tmv,habitat);
        this.tpdepele=tpdepele;
        this.sistemarespiratorio=sistemarespiratorio;
    }
}

let anfibio1=new Anfibio("perereca", "6 à 15 gramas", "4 à 7 cm", "árvores de florestas, pantanos, e ambientes aquáticos.", "cerca de 12 anos", "pele lisa, com presença de discos adesivos que permitem que elas escalem superfícies", "pode variar entre branquial, pulmonar ou cutânea".);

let anfibio2=new Anfibio("salamandra", "19 gramas", "12 à 19 cm", "20 à 25 anos", "zonas umidas e sombrias, fora de zonas abertas", "lisa e sem escama, lustrosa", "pode variar entre branquial, pulmonar ou cutânea".);

let anfibio3=new Anfibio("sapo", "2 à 14", "10 à 15 cm", "10 à 12 anos", "cerrados, campos, brejos, pastagens, matas ciliares e bordas de matas", "fina e umida, sem pelos ou escamas.", "na fase pequena, a respiração é branquial, na fase adulta a respiração é pulmonar e cutânea".);

let anfibio4=new Anfibio("Cecília, ou cobra cega", "260 gramas", "80 à 90 cm", "10 à 20 anos", "solos umidos e cavidades subterrâneas", "pele escamosa", "aberturas nasais localizadas na parte superior da cabeça".);

console.log("O animal da vez é" nome , "pesa em torno de" peso , "e tem cerca de" comprimento , "vive em média" tmv , "vivem em" habitat , "possuem" tddepele "e" sistemarespiratorio .)
