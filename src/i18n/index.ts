import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        mission: 'Our Mission',
        projects: 'Projects',
        contact: 'Contact',
        menu: 'Menu',
        close: 'Close Menu'
      },
      hero: {
        slogan: 'Preserving Oceans, Empowering Lives',
        donate: 'Donate Now',
        donationTitle: 'Support Our Cause',
        donationText: 'Your donation helps us continue our mission of ocean conservation and community empowerment. Every contribution, no matter the size, makes a difference in preserving our marine ecosystems and supporting coastal communities.',
        donateHere: 'Donate Here',
        close: 'Close'
      },
      mission: {
        title: 'Our Mission',
        story: 'Ondas de Esperança was born from a group of friends who witnessed the beauty of Brazil\'s coastlines being threatened by pollution and neglect. In 2018, we started organizing beach cleanups and soon realized the deeper need to empower coastal communities through education and sustainable practices. Today, we work tirelessly to clean our oceans, teach children about environmental care, and support local families with eco-friendly livelihoods—because every wave can carry hope.',
        oceanCleanup: {
          title: 'Ocean Cleanup',
          description: 'We organize regular beach cleanups and work with local communities to reduce plastic pollution in our oceans.'
        },
        education: {
          title: 'Community Education',
          description: 'Empowering coastal communities through environmental education and sustainable fishing practices.'
        },
        conservation: {
          title: 'Marine Conservation',
          description: 'Protecting marine ecosystems and endangered species through research and conservation programs.'
        }
      },
      projects: {
        title: 'Our Projects',
        cleanup: {
          title: 'Beach Cleanup 2023',
          desc: 'Collected 500kg of trash with 50 volunteers',
          details: 'In July 2023, we organized a massive beach cleanup initiative across Florianópolis beaches. With the help of 50 dedicated volunteers, we successfully removed 500kg of plastic waste and debris from our coastlines. This effort not only protected marine life but also raised significant awareness about ocean pollution in our community. The collected waste was properly sorted for recycling, and we conducted educational sessions during breaks to teach volunteers about marine conservation.'
        },
        guardians: {
          title: 'Ocean Guardians Program',
          desc: 'Educated 100 kids on ocean care',
          details: 'The Ocean Guardians Program is our flagship educational initiative that reached 100 children in coastal communities during 2023. Through interactive workshops, field trips, and hands-on activities, we taught young minds about marine ecosystems, the importance of ocean conservation, and sustainable practices. The program included practical sessions on identifying marine species, understanding the impact of pollution, and learning about sustainable fishing practices. The children also participated in creating art from recycled materials found on beaches.'
        },
        workshop: {
          title: 'Sustainable Crafts Workshop',
          desc: 'Trained 20 families in eco-crafts',
          details: 'Our Sustainable Crafts Workshop initiative empowered 20 local families with skills to create beautiful, marketable items from recycled materials found on beaches. This program not only helps reduce waste but also provides an additional source of income for coastal communities. Participants learned techniques for working with various materials, from sea glass to recycled plastic, creating jewelry, decorative items, and functional pieces. The workshop also included sessions on basic business skills and online marketing to help participants sell their creations.'
        }
      },
      contact: {
        title: 'Get in Touch',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        follow: 'Follow Us',
        support: 'Support our cause'
      },
      footer: {
        quickLinks: 'Quick Links',
        followUs: 'Follow Us',
        rights: 'All rights reserved.'
      }
    }
  },
  pt: {
    translation: {
      nav: {
        home: 'Início',
        mission: 'Nossa Missão',
        projects: 'Projetos',
        contact: 'Contato',
        menu: 'Menu',
        close: 'Fechar Menu'
      },
      hero: {
        slogan: 'Preservando Oceanos, Capacitando Vidas',
        donate: 'Doe Agora',
        donationTitle: 'Apoie Nossa Causa',
        donationText: 'Sua doação nos ajuda a continuar nossa missão de conservação dos oceanos e capacitação da comunidade. Cada contribuição, não importa o tamanho, faz diferença na preservação de nossos ecossistemas marinhos e no apoio às comunidades costeiras.',
        donateHere: 'Doe Aqui',
        close: 'Fechar'
      },
      mission: {
        title: 'Nossa Missão',
        story: 'Ondas de Esperança nasceu de um grupo de amigos que testemunhou a beleza do litoral brasileiro sendo ameaçada pela poluição e negligência. Em 2018, começamos a organizar limpezas de praias e logo percebemos a necessidade mais profunda de capacitar as comunidades costeiras através da educação e práticas sustentáveis. Hoje, trabalhamos incansavelmente para limpar nossos oceanos, ensinar crianças sobre cuidados ambientais e apoiar famílias locais com meios de subsistência ecológicos—porque cada onda pode carregar esperança.',
        oceanCleanup: {
          title: 'Limpeza dos Oceanos',
          description: 'Organizamos limpezas regulares de praias e trabalhamos com comunidades locais para reduzir a poluição plástica em nossos oceanos.'
        },
        education: {
          title: 'Educação Comunitária',
          description: 'Capacitando comunidades costeiras através da educação ambiental e práticas de pesca sustentável.'
        },
        conservation: {
          title: 'Conservação Marinha',
          description: 'Protegendo ecossistemas marinhos e espécies ameaçadas através de programas de pesquisa e conservação.'
        }
      },
      projects: {
        title: 'Nossos Projetos',
        cleanup: {
          title: 'Limpeza de Praia 2023',
          desc: 'Coletamos 500kg de lixo com 50 voluntários',
          details: 'Em julho de 2023, organizamos uma grande iniciativa de limpeza de praias em Florianópolis. Com a ajuda de 50 voluntários dedicados, removemos com sucesso 500kg de resíduos plásticos e detritos de nossas costas. Este esforço não apenas protegeu a vida marinha, mas também aumentou significativamente a conscientização sobre a poluição dos oceanos em nossa comunidade. Os resíduos coletados foram devidamente separados para reciclagem, e realizamos sessões educativas durante as pausas para ensinar os voluntários sobre conservação marinha.'
        },
        guardians: {
          title: 'Programa Guardiões do Oceano',
          desc: 'Educamos 100 crianças sobre cuidados com o oceano',
          details: 'O Programa Guardiões do Oceano é nossa iniciativa educacional principal que alcançou 100 crianças em comunidades costeiras durante 2023. Através de oficinas interativas, excursões e atividades práticas, ensinamos às jovens mentes sobre ecossistemas marinhos, a importância da conservação dos oceanos e práticas sustentáveis. O programa incluiu sessões práticas de identificação de espécies marinhas, compreensão do impacto da poluição e aprendizado sobre práticas de pesca sustentável. As crianças também participaram da criação de arte com materiais reciclados encontrados nas praias.'
        },
        workshop: {
          title: 'Oficina de Artesanato Sustentável',
          desc: 'Treinamos 20 famílias em artesanato ecológico',
          details: 'Nossa iniciativa de Oficina de Artesanato Sustentável capacitou 20 famílias locais com habilidades para criar itens bonitos e comercializáveis a partir de materiais reciclados encontrados nas praias. Este programa não apenas ajuda a reduzir o desperdício, mas também fornece uma fonte adicional de renda para as comunidades costeiras. Os participantes aprenderam técnicas para trabalhar com diversos materiais, desde vidro marinho até plástico reciclado, criando joias, itens decorativos e peças funcionais. A oficina também incluiu sessões sobre habilidades básicas de negócios e marketing online para ajudar os participantes a vender suas criações.'
        }
      },
      contact: {
        title: 'Entre em Contato',
        name: 'Nome',
        email: 'Email',
        message: 'Mensagem',
        send: 'Enviar Mensagem',
        follow: 'Siga-nos',
        support: 'Apoie nossa causa'
      },
      footer: {
        quickLinks: 'Links Rápidos',
        followUs: 'Siga-nos',
        rights: 'Todos os direitos reservados.'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;