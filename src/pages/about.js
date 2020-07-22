import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import SocialLinks from '../components/SocialLinks'

import { MainContent } from '../styles/base'

const AboutPage = () => (
  <Layout>
    <SEO
      title="Sobre mim"
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
    />
    <MainContent>
      <h1>Sobre mim</h1>
      <p>Meu nome é John Doe.</p>

      <p>Já passei por empresas como John Doe Business , </p>

      <p>
        Eu amo trabalhar em equipe e sou bem comunicativo. No meu tempo livre,
        gosto de ensinar meus amigos sobre alguma coisa que aprendi, acho que
        por isso nasceu esse blog.
      </p>

      <h2>Habilidades</h2>

      <h2>Contato</h2>

      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais.
      </p>

      <SocialLinks hideStyle />
    </MainContent>
  </Layout>
)

export default AboutPage
