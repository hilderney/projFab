main();

function main() {
  console.log('AQUI');

  const team = getTeam();

  console.log(team)
}

function getTeam() {
  return [
    {
      expertise: "SAÚDE, CIÊNCIA E PRIMEIROS SOCORROS",
      name: "Fábio Leonardo",
      desc: "Médico pela USP, formação na University of California San Diego, Harvard, Faculdade de Medicina do ABC e Escola Paulista de Medicina - Unifesp",
      img: "hero_001.jpg"
    },
    {
      expertise: "DIREITO, DEMOCRACIA E DIREITOS HUMANOS",
      name: "Pedro Brambilla",
      desc: "Advogado, mestre em Direito pelo Centro Universitário de Maringá, professor na Faculdade de Direito de Presidente Prudente",
      img: "hero_002.png"
    },
    {
      expertise: "ENGENHARIA, INFORMÁTICA E INTELIGÊNCIA ARTIFICIAL",
      name: "Felipe Lemos",
      desc: "Engenheiro pela Poli / USP, mestre e doutor na área de modelagem matemática.Consultor em ciência de dados, AI e tecnologia",
      img: "hero_003.jpg"
    },
    {
      expertise: "PSICOLOGIA, CURRÍCULO E RECURSOS HUMANOS",
      name: "Fátima Cristina",
      desc: "Psicóloga, coordenadora de Recursos Humanos da Unoeste, MBA em Recursos Humanos, Mestra em Educação pela Unoeste",
      img: "hero_004.jpg"
    },
    {
      expertise: "ADMINISTRAÇÃO E MARKETING",
      name: "Marina Lopes",
      desc: "Formada em Administração pela USP e MBA em Marketing pela USP; certificação(PM3) e atuação(Nuvemshop) como Product Marketing",
      img: "hero_005.jpg"
    },
    {
      expertise: "EMPREENDEDORISMO E STARTUPS",
      name: "Débora Prado",
      desc: "Engenheira Florestal e doutora em Biotecnologia pela UNESP; atua em pesquisa e inovação de cientistas empreendedores; analista de projetos na Wylinka",
      img: "hero_006.jpg"
    },
    {
      expertise: "DIREITO DIGITAL, METAVERSO E BLOCKCHAIN",
      name: "Celso Reic",
      desc: "Advogado, procurador jurídico, mestre em Direito Empresarial pela FGV e em Gestão Pública pela UFGD, MBA em Digital Business pela USP",
      img: "hero_007.jpg"
    },
    {
      expertise: "ECONOMIA E FINANÇAS",
      name: "Josélia Galiciano",
      desc: "Economista, especialista em Economia Empresarial pela UEL, mestra e doutoranda em Educação pela Unoeste, docente da Unoeste",
      img: "hero_008.jpg"
    },
    {
      expertise: "ORATÓRIA E COMUNICAÇÃO",
      name: "Raphael Marquezi",
      desc: "Formado em Comunicação Social, especialização em Comunicação Organizacional e Oratória, mestre em Gestão do Conhecimento; professor de oratória na Vox2you",
      img: "hero_009.jpg"
    },
    {
      expertise: "IMPOSTO DE RENDA E APOSENTADORIA",
      name: "Lucas Pereira",
      desc: "Formado em Administração e em Ciências Contábeis, docente da Unoeste e empresário contábil; mestre em Meio Ambiente e Desenvolvimento Regional",
      img: "hero_010.jpg"
    },
    {
      expertise: "HUMANIDADE, PROPÓSITO E FUTURISMO",
      name: "Samuel Pirondi",
      desc: "Formado em Relações Internacionais na Messiah University, estudos em Oxford, China e Oriente Médio; cofundador da Urban Farm, consultor na Converse",
      img: "hero_011.jpg"
    },
    {
      expertise: "GASTRONOMIA E NUTRIÇÃO",
      name: "Adriane Gasparino",
      desc: "Nutricionista e Chefe de Cozinha, mestra e doutora em Pediatria pela UNESP; professora universitária em Biomedicina e em Gastronomia",
      img: "hero_012.jpg"
    }
  ];
}


