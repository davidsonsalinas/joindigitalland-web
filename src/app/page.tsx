"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'


export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [language, setLanguage] = useState<'pt-br' | 'en'>('pt-br');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'pt-br' ? 'en' : 'pt-br'))
  }

  const texts = {
    "pt-br": {
      title: "Join Digital Land",
      subtitle: "Seu parceiro em excelência no desenvolvimento de software",
      whyChooseUs: "Por que escolher-nos",
      expertise: "Especialização",
      expertiseDesc: "Anos de experiência em desenvolvimento de software de ponta",
      innovation: "Inovação",
      innovationDesc: "Estamos à frente com as tecnologias mais recentes",
      results: "Resultados",
      resultsDesc: "Histórico comprovado de projetos bem-sucedidos",
      whatWeDo: "O que fazemos",
      customSoftware: "Desenvolvimento de Software Sob Medida",
      customSoftwareDesc: "Soluções personalizadas para atender às suas necessidades exclusivas",
      webApps: "Desenvolvimento de Aplicações Web",
      webAppsDesc: "Aplicações web escaláveis e responsivas",
      mobileApps: "Desenvolvimento de Aplicativos Móveis",
      mobileAppsDesc: "Aplicativos móveis nativos e multiplataforma",
      cloudSolutions: "Soluções em Nuvem",
      cloudSolutionsDesc: "Aproveitando tecnologias de nuvem para desempenho ideal",
      howWeDoIt: "Como fazemos",
      caseStudy1: "Estudo de Caso 1",
      caseStudy1Desc: "Otimização de plataforma de e-commerce resultando em aumento de 50% nas vendas",
      caseStudy2: "Estudo de Caso 2",
      caseStudy2Desc: "Desenvolvimento de CRM personalizado para uma empresa Fortune 500",
      caseStudy3: "Estudo de Caso 3",
      caseStudy3Desc: "Solução IoT para fabricante de dispositivos de casa inteligente",
      contact: "Entre em Contato",
      yourName: "Seu Nome",
      yourEmail: "Seu E-mail",
      yourMessage: "Sua Mensagem",
      sendMessage: "Enviar Mensagem",
      copyright: "Todos os direitos reservados.",
      buttonLang: "EN"
    },
    en: {
      title: "Join Digital Land",
      subtitle: "Your Partner in Software Development Excellence",
      whyChooseUs: "Why Choose Us",
      expertise: "Expertise",
      expertiseDesc: "Years of experience in cutting-edge software development",
      innovation: "Innovation",
      innovationDesc: "We stay ahead of the curve with the latest technologies",
      results: "Results",
      resultsDesc: "Proven track record of delivering successful projects",
      whatWeDo: "What We Do",
      customSoftware: "Custom Software Development",
      customSoftwareDesc: "Tailored solutions to meet your unique business needs",
      webApps: "Web Application Development",
      webAppsDesc: "Scalable and responsive web applications",
      mobileApps: "Mobile App Development",
      mobileAppsDesc: "Native and cross-platform mobile applications",
      cloudSolutions: "Cloud Solutions",
      cloudSolutionsDesc: "Leveraging cloud technologies for optimal performance",
      howWeDoIt: "How We Do It",
      caseStudy1: "Case Study 1",
      caseStudy1Desc: "E-commerce platform optimization resulting in 50% increase in sales",
      caseStudy2: "Case Study 2",
      caseStudy2Desc: "Custom CRM development for a Fortune 500 company",
      caseStudy3: "Case Study 3",
      caseStudy3Desc: "IoT solution for smart home device manufacturer",
      contact: "Get in Touch",
      yourName: "Your Name",
      yourEmail: "Your Email",
      yourMessage: "Your Message",
      sendMessage: "Send Message",
      copyright: "All rights reserved.",
      buttonLang: "PT-BR"
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', { name, email, message })
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex justify-center h-14">
          <nav className="flex space-x-4 lg:space-x-6 items-center">
            <a href="#home" className="text-sm font-medium transition-colors hover:text-purple">
             {language === 'pt-br' ? 'Início' : 'Home'}
            </a>
            <a href="#why" className="text-sm font-medium transition-colors hover:text-purple">
              {language === 'pt-br' ? 'Por que fazemos' : 'Why Choose Us'}
            </a>
            <a href="#what" className="text-sm font-medium transition-colors hover:text-purple">
             {language === 'pt-br' ? 'O que fazemos' : 'What We Do'}
            </a>
            <a href="#how" className="text-sm font-medium transition-colors hover:text-purple">
            {language === 'pt-br' ? 'Como fazemos' : 'How We Do It'}
            </a>
            <a href="#contact" className="text-sm font-medium transition-colors hover:text-purple">
              Contato 
            </a>
          </nav>
        </div>
        
        <button
          className="absolute top-4 right-4 px-4 py-2 text-sm font-medium border rounded hover:bg-gray-200 transition-colors"
          onClick={toggleLanguage}
        >
          {texts[language].buttonLang}
        </button>
      </header>

      <main>
        <section id="home" className="py-20 text-center">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">{texts[language].title}</h1>
            <p className="text-xl mb-8">{texts[language].subtitle}</p>
            <Image src="https://assets.joindigitalland.com/images/garota-dev.jpg" alt="Garota desenvolvedora" className="mx-auto rounded-lg shadow-lg" width={800} height={400} />
          </div>
        </section>

        <section id="why" className="py-20 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">{texts[language].whyChooseUs}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{texts[language].expertise}</h3>
                  <p>{texts[language].expertiseDesc}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{texts[language].innovation}</h3>
                  <p>{texts[language].innovationDesc}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{texts[language].results}</h3>
                  <p>{texts[language].resultsDesc}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="what" className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">{texts[language].whatWeDo}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">{texts[language].customSoftware}</h3>
                <p>{texts[language].customSoftwareDesc}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{texts[language].webApps}</h3>
                <p>{texts[language].webAppsDesc}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{texts[language].mobileApps}</h3>
                <p>{texts[language].mobileAppsDesc}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{texts[language].cloudSolutions}</h3>
                <p>{texts[language].cloudSolutionsDesc}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="py-20 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">{texts[language].howWeDoIt}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{texts[language].caseStudy1}</h3>
                  <p>{texts[language].caseStudy1Desc}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{texts[language].caseStudy2}</h3>
                  <p>{texts[language].caseStudy2Desc}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{texts[language].caseStudy3}</h3>
                  <p>{texts[language].caseStudy3Desc}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container max-w-md">
            <h2 className="text-3xl font-bold mb-8 text-center">{texts[language].contact}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder={texts[language].yourName}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder={texts[language].yourEmail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Textarea
                placeholder={texts[language].yourMessage}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <Button type="submit" className="w-full">{texts[language].sendMessage}</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="py-6 text-center bg-muted">
        <p>&copy; 2023 {texts[language].title}. {texts[language].copyright}</p>
      </footer>
    </div>
  )
}
