"use client";

import { useState } from "react";
import { Check, Heart, Users, TrendingDown, Shield, Sparkles, ArrowRight, Star, Zap, Target, Award, Brain, Leaf, Trophy, MessageCircle, Clock, Flame, ChevronDown, DollarSign, Cigarette, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const CHECKOUT_URL = "https://pay.cakto.com.br/hjbm8fk_645182";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-purple-500/20 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
      </div>

      {/* SESSÃO 1: HERO - A DOBRA */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center space-y-6 sm:space-y-8">
            {/* Badge de Prova Social */}
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-xl border border-emerald-500/30 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium animate-bounce">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              <span className="text-emerald-300">Junte-se às +10.000 pessoas que já estão respirando melhor</span>
            </div>

            {/* HEADLINE FORTE - Focada no Resultado */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] sm:leading-none">
              <span className="block text-white mb-2 sm:mb-4">O Sistema Completo Para</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 animate-pulse">
                Parar de Fumar
              </span>
              <span className="block text-white mt-2 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Definitivamente
              </span>
            </h1>

            {/* SUB-HEADLINE - Focada no Método */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light px-4">
              Use o aplicativo que combina <span className="text-emerald-400 font-bold">acompanhamento psicológico</span>, <span className="text-cyan-400 font-bold">rastreamento de progresso</span> e <span className="text-purple-400 font-bold">apoio 24h</span> para vencer o vício
            </p>

            {/* CTA Principal - Alto Contraste */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 sm:pt-8 px-4">
              <Button 
                size="lg"
                onClick={() => window.open(CHECKOUT_URL, '_blank')}
                className="group relative w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-black font-black rounded-2xl shadow-[0_0_50px_rgba(16,185,129,0.5)] hover:shadow-[0_0_80px_rgba(16,185,129,0.8)] transition-all duration-300 hover:scale-105 border-2 border-emerald-400 px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg lg:text-xl"
              >
                <span className="flex items-center justify-center gap-2 whitespace-nowrap">
                  QUERO MINHA LIBERDADE AGORA
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
            </div>

            {/* Prova Social Sutil */}
            <p className="text-sm sm:text-base text-gray-400 pt-4">
              ✨ Mais de <span className="text-emerald-400 font-bold">5.000 pessoas</span> já conquistaram sua liberdade
            </p>

            {/* Stats Bar - Responsivo */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-8 max-w-3xl mx-auto pt-8 sm:pt-12 px-4">
              {[
                { number: "10K+", label: "Usuários Ativos" },
                { number: "87%", label: "Taxa de Sucesso" },
                { number: "4.8★", label: "Avaliação Média" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-400 mt-1 sm:mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-emerald-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* SESSÃO 2: A DOR - Problem Section */}
      <section className="relative z-10 py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-black via-red-950/10 to-black px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Título da Seção */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
              Essa "Vontade"
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mt-2">
                Controla Sua Vida?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Você se identifica com isso?
            </p>
          </div>

          {/* Grid de Dores - 4 Colunas Responsivo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: Leaf,
                title: "Medo Constante",
                description: "O medo da tosse, falta de ar e problemas de saúde no futuro"
              },
              {
                icon: DollarSign,
                title: "Dinheiro Queimado",
                description: "Centenas de reais todo mês que poderiam estar no seu bolso"
              },
              {
                icon: Lock,
                title: "Frustração Repetida",
                description: "Tentou parar sozinho várias vezes e sempre voltou"
              },
              {
                icon: Clock,
                title: "Dependência Total",
                description: "Ter que parar tudo para 'dar um trago' - você não controla mais"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-xl border border-red-500/20 rounded-2xl p-6 sm:p-8 hover:border-red-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:rotate-12 transition-transform">
                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SESSÃO 3: A SOLUÇÃO - The Turn */}
      <section className="relative z-10 py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-black via-cyan-950/20 to-black px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
              Você Não Falhou Por
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mt-2">
                Falta de Vontade
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Você falhou por <span className="text-emerald-400 font-bold">falta de um sistema</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            {/* Mockup do App */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur-3xl opacity-30 animate-pulse" />
              <div className="relative bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-xl border border-emerald-500/30 rounded-3xl p-6 sm:p-8 lg:p-12">
                <div className="aspect-[9/16] bg-gradient-to-br from-gray-900 to-black rounded-2xl border-4 border-gray-800 shadow-2xl flex items-center justify-center">
                  <div className="text-center space-y-4 sm:space-y-6 p-4 sm:p-6">
                    <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                      127
                    </div>
                    <p className="text-base sm:text-lg text-gray-400">Dias sem fumar</p>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
                      <div className="bg-emerald-500/20 rounded-xl p-3 sm:p-4">
                        <div className="text-xl sm:text-2xl font-bold text-emerald-400">R$ 3.810</div>
                        <div className="text-xs sm:text-sm text-gray-400">Economizado</div>
                      </div>
                      <div className="bg-cyan-500/20 rounded-xl p-3 sm:p-4">
                        <div className="text-xl sm:text-2xl font-bold text-cyan-400">98%</div>
                        <div className="text-xs sm:text-sm text-gray-400">Saúde</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Texto Explicativo */}
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                Parar de fumar não é só "força de vontade". É uma <span className="text-white font-bold">batalha contra um hábito químico e psicológico</span>.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                É por isso que criamos o <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-black">Respire+</span>, um <span className="text-white font-bold">sistema completo</span> que te dá todas as ferramentas no mesmo lugar.
              </p>
            </div>
          </div>

          {/* Ferramentas - 4 Colunas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: Target,
                title: "Rastreador de Sucesso",
                description: "Veja seus dias limpo, dinheiro salvo e saúde recuperada em tempo real"
              },
              {
                icon: Trophy,
                title: "Metas e Conquistas",
                description: "Sistema de gamificação que te mantém motivado a cada vitória"
              },
              {
                icon: Users,
                title: "Comunidade de Apoio",
                description: "Converse com outras pessoas na mesma jornada que você"
              },
              {
                icon: Brain,
                title: "Coach de IA (Respiro)",
                description: "Seu apoio 24h. Sentiu vontade? Converse com ele na hora"
              }
            ].map((tool, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                  <tool.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">{tool.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SESSÃO 4: DESTAQUE DAS FUNCIONALIDADES */}
      <section className="relative z-10 py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-black via-blue-950/10 to-black px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
              Ferramentas Que
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2">
                Funcionam de Verdade
              </span>
            </h2>
          </div>

          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {/* Feature 1 - Dashboard */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                  Veja Sua Vitória em <span className="text-emerald-400">Tempo Real</span>
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Acompanhe cada dia sem fumar, quanto dinheiro você economizou e como sua saúde está melhorando. <span className="text-white font-bold">Visualizar seu progresso é o combustível da motivação.</span>
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Dias limpo", "Dinheiro economizado", "Saúde recuperada"].map((item, i) => (
                    <div key={i} className="bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 text-sm text-emerald-300 font-medium">
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-xl border border-emerald-500/30 rounded-3xl p-6 sm:p-8 lg:p-12 aspect-square flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Target className="w-16 h-16 sm:w-20 sm:h-20 text-emerald-400 mx-auto" />
                  <p className="text-lg sm:text-xl text-gray-300">Dashboard Interativo</p>
                </div>
              </div>
            </div>

            {/* Feature 2 - Comunidade */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-6 sm:p-8 lg:p-12 aspect-square flex items-center justify-center order-2 lg:order-1">
                <div className="text-center space-y-4">
                  <Users className="w-12 h-12 sm:w-14 sm:h-14 text-purple-400 mx-auto" />
                  <p className="text-lg sm:text-xl text-gray-300">Comunidade Ativa</p>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                  Você Nunca Estará <span className="text-purple-400">Sozinho</span>
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Conecte-se com milhares de pessoas que entendem exatamente o que você está passando. <span className="text-white font-bold">Compartilhe vitórias, peça ajuda e inspire outros.</span>
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Grupos de apoio", "Chat 24/7", "Histórias reais"].map((item, i) => (
                    <div key={i} className="bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 text-sm text-purple-300 font-medium">
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature 3 - Coach IA */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                  Ajuda Imediata Contra a Fissura, <span className="text-cyan-400">a Qualquer Hora</span>
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Sentiu vontade às 3h da manhã? O Coach de IA está sempre disponível para te guiar com técnicas comprovadas de controle de ansiedade. <span className="text-white font-bold">Apoio instantâneo quando você mais precisa.</span>
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Disponível 24/7", "Técnicas de TCC", "Respostas instantâneas"].map((item, i) => (
                    <div key={i} className="bg-cyan-500/20 border border-cyan-500/30 rounded-full px-4 py-2 text-sm text-cyan-300 font-medium">
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-6 sm:p-8 lg:p-12 aspect-square flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Brain className="w-16 h-16 sm:w-20 sm:h-20 text-cyan-400 mx-auto" />
                  <p className="text-lg sm:text-xl text-gray-300">Coach de IA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SESSÃO 5: PROVA SOCIAL */}
      <section className="relative z-10 py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-black via-purple-950/20 to-black px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
              Eles Retomaram o Controle.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mt-2">
                Veja Como
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Marina Silva",
                time: "3 meses livre",
                text: "O contador de dinheiro me manteve focada. Ver quanto eu estava economizando foi o empurrão que eu precisava!",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
              },
              {
                name: "Carlos Eduardo",
                time: "6 meses livre",
                text: "A comunidade me ajudou nos dias difíceis. Saber que não estava sozinho fez toda a diferença.",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              },
              {
                name: "Juliana Costa",
                time: "4 meses livre",
                text: "O coach de IA me salvou de uma recaída às 2h da manhã. Conversei com ele e a vontade passou!",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex gap-1 mb-4 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-purple-400/50 flex-shrink-0"
                  />
                  <div>
                    <div className="font-bold text-white text-base sm:text-lg">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-emerald-400 font-semibold">{testimonial.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SESSÃO 6: CTA FINAL */}
      <section className="relative z-10 py-16 sm:py-24 lg:py-32 bg-black px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8 leading-tight">
            Você Já Tentou Sozinho.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mt-2">
              Agora, Tente Com o Sistema Completo
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Baixe o <span className="text-white font-bold">Respire+</span> e dê o primeiro passo real para sua liberdade
          </p>

          <Button 
            size="lg"
            onClick={() => window.open(CHECKOUT_URL, '_blank')}
            className="group w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-black font-black rounded-2xl shadow-[0_0_50px_rgba(16,185,129,0.5)] hover:shadow-[0_0_80px_rgba(16,185,129,0.8)] transition-all duration-300 hover:scale-105 border-2 border-emerald-400 mb-6 px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg lg:text-xl"
          >
            <span className="flex items-center justify-center gap-2 whitespace-nowrap">
              QUERO PARAR DE FUMAR AGORA
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
            </span>
          </Button>

          <p className="text-sm sm:text-base text-gray-400">
            ✨ Comece seu teste grátis de 7 dias • Acesso imediato • Sem compromisso
          </p>
        </div>
      </section>

      {/* SESSÃO 7: FAQ - ACCORDION FUNCIONAL */}
      <section className="relative z-10 py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-black via-emerald-950/10 to-black px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
              Perguntas
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mt-2">
                Frequentes
              </span>
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {[
              {
                question: "E se eu tiver uma recaída?",
                answer: "Recaídas fazem parte do processo de recuperação. O Respire+ te ajuda a entender o que aconteceu, aprender com a experiência e seguir em frente sem culpa. Nossa comunidade e coach de IA estão sempre disponíveis para te apoiar nesses momentos."
              },
              {
                question: "O app substitui um médico?",
                answer: "Não. O Respire+ é uma ferramenta de apoio complementar. Se você tem condições de saúde específicas ou está em tratamento médico, continue seguindo as orientações do seu profissional de saúde. Nosso app potencializa seus esforços, mas não substitui acompanhamento médico."
              },
              {
                question: "Como o app funciona?",
                answer: "O Respire+ combina várias ferramentas em um só lugar: rastreamento de progresso (dias limpo, dinheiro economizado), sistema de metas e conquistas para te manter motivado, comunidade de apoio 24h e coach de IA para momentos de fissura. Você escolhe quais ferramentas usar e quando usar."
              },
              {
                question: "Eu preciso usar o coach de IA?",
                answer: "Não, ele é apenas uma das várias ferramentas de apoio disponíveis. Você pode usar os contadores, a comunidade, as metas ou o que funcionar melhor para você. O app é flexível e se adapta ao seu estilo."
              },
              {
                question: "Quanto custa?",
                answer: "R$ 19,90 por mês. Você pode cancelar quando quiser, sem multas ou burocracias. Compare: é menos do que você gasta em pods/líquidos em uma semana. Investir na sua liberdade é o melhor negócio que você pode fazer."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden hover:border-emerald-400/50 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left"
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white pr-4">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 sm:px-8 pb-6 sm:pb-8 text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - Full Width */}
      <section className="relative z-10 py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-emerald-600 via-cyan-600 to-purple-600 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTZjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMjRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTEyIDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight">
            Sua Nova Vida
            <span className="block mt-2">Começa Agora</span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto">
            Junte-se a <span className="font-black">+10.000 pessoas</span> que já decidiram respirar melhor
          </p>

          <div className="bg-black/30 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 border-2 border-white/30 shadow-[0_0_100px_rgba(255,255,255,0.2)] max-w-2xl mx-auto">
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
              {[
                "Acesso completo a todas as funcionalidades",
                "Cancele quando quiser, sem compromisso",
                "Apenas R$ 19,90/mês"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-4 text-left">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                  </div>
                  <span className="text-white text-base sm:text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg"
              onClick={() => window.open(CHECKOUT_URL, '_blank')}
              className="w-full bg-white text-black hover:bg-gray-100 font-black rounded-2xl shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300 px-6 py-5 sm:py-6 md:py-7 text-base sm:text-lg md:text-xl lg:text-2xl"
            >
              <span className="flex items-center justify-center gap-2">
                Começar Agora
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 inline-block" />
              </span>
            </Button>

            <p className="text-white/80 mt-4 sm:mt-6 text-xs sm:text-sm">
              🔒 Pagamento 100% seguro • Sem compromisso
            </p>
          </div>

          <p className="text-white/70 mt-8 sm:mt-12 text-base sm:text-lg">
            Mais de <span className="font-bold text-white">10.000 pessoas</span> já transformaram suas vidas. Você é o próximo?
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black border-t border-white/10 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4 sm:mb-6">
              Respire+
            </div>
            <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">Sua jornada para uma vida livre do vape</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-500">
              <a href="#" className="hover:text-emerald-400 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacidade</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Contato</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Suporte</a>
            </div>
            <p className="mt-6 sm:mt-8 text-xs text-gray-600">© 2024 Respire+. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
