# Grazielly Duarte - Maquiadora Profissional

Site profissional e elegante para uma maquiadora em Portugal, desenvolvido com HTML5, CSS3 e JavaScript puro.

## 🎨 Características

- **Design Moderno e Elegante**: Interface feminina e sofisticada com cores suaves
- **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- **Animações Suaves**: Efeitos CSS e JavaScript para melhor experiência do usuário
- **Formulários Interativos**: Validação em tempo real e feedback visual
- **Galeria com Filtros**: Organização por categorias de maquilhagem
- **SEO Otimizado**: Meta tags e estrutura semântica
- **Acessibilidade**: Navegação por teclado e leitores de tela

## 📁 Estrutura do Projeto

```
projetoGDMAKEUP/
├── index.html              # Página principal
├── css/
│   └── style.css          # Estilos principais
├── js/
│   └── main.js            # Funcionalidades JavaScript
├── assets/                # Imagens e recursos
│   ├── hero-image.jpg
│   ├── about-image.jpg
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   ├── gallery-3.jpg
│   ├── gallery-4.jpg
│   ├── gallery-5.jpg
│   ├── gallery-6.jpg
│   └── favicon.ico
└── README.md              # Documentação
```

## 🚀 Como Usar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, para desenvolvimento)

### Instalação

1. **Clone ou baixe o projeto**
   ```bash
   git clone https://github.com/seu-usuario/projetoGDMAKEUP.git
   cd projetoGDMAKEUP
   ```

2. **Abra o arquivo index.html**
   - Duplo clique no arquivo `index.html`
   - Ou use um servidor local:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (com http-server)
   npx http-server
   
   # PHP
   php -S localhost:8000
   ```

3. **Acesse no navegador**
   - Se abriu diretamente: `file:///caminho/para/index.html`
   - Se usando servidor: `http://localhost:8000`

## 📱 Seções do Site

### 1. **Página Inicial**
- Header com navegação fixa
- Hero section com call-to-action
- Animações de entrada

### 2. **Sobre Mim**
- Biografia da profissional
- Experiência e formação
- Especializações

### 3. **Serviços**
- Cards interativos para cada serviço
- Preços e descrições
- Efeitos hover

### 4. **Galeria**
- Filtros por categoria
- Efeitos de overlay
- Layout responsivo

### 5. **Agendamento**
- Formulário com validação
- Seleção de serviço e data
- Confirmação interativa

### 6. **Contactos**
- Informações de contacto
- Links para redes sociais
- Mapa incorporado
- Formulário de mensagem

## 🎯 Funcionalidades JavaScript

### Navegação
- Menu mobile responsivo
- Links ativos baseados na seção
- Scroll suave entre seções

### Formulários
- Validação em tempo real
- Mensagens de erro personalizadas
- Confirmação de envio
- Formatação automática de telefone

### Galeria
- Filtros dinâmicos
- Animações de transição
- Efeitos hover

### Animações
- Scroll reveal
- Contadores animados
- Efeitos de entrada
- Transições suaves

## 🎨 Personalização

### Cores
As cores principais estão definidas como variáveis CSS:

```css
:root {
    --first-color: #f8b4d9;        /* Rosa principal */
    --first-color-alt: #f4a6c8;    /* Rosa alternativo */
    --title-color: #2c1810;        /* Marrom escuro */
    --text-color: #6c5b7b;         /* Roxo acinzentado */
    --gold-color: #d4af37;         /* Dourado */
}
```

### Fontes
- **Títulos**: Playfair Display (elegante)
- **Texto**: Poppins (moderna e legível)

### Imagens
Substitua as imagens na pasta `assets/`:
- `hero-image.jpg` - Imagem principal
- `about-image.jpg` - Foto da profissional
- `gallery-*.jpg` - Imagens da galeria

## 📧 Configuração de Contactos

### Informações da Profissional
Edite no arquivo `index.html`:

```html
<!-- Telefone -->
<span class="contact__text">+351 912 345 678</span>

<!-- E-mail -->
<span class="contact__text">ana.silva@email.com</span>

<!-- Localização -->
<span class="contact__text">Lisboa, Portugal</span>
```

### Redes Sociais
Atualize os links no HTML:

```html
<a href="https://wa.me/351912345678" class="contact__social-link">
    <i class="fab fa-whatsapp"></i>
</a>
<a href="https://instagram.com/anasilva_makeup" class="contact__social-link">
    <i class="fab fa-instagram"></i>
</a>
<a href="https://facebook.com/anasilvamakeup" class="contact__social-link">
    <i class="fab fa-facebook"></i>
</a>
```

### Mapa
Substitua o iframe do Google Maps:

```html
<iframe 
    src="https://www.google.com/maps/embed?pb=SEU_CODIGO_AQUI"
    width="100%" 
    height="300" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

## 🔧 Manutenção

### Adicionar Novos Serviços
1. Adicione o card no HTML (seção services)
2. Atualize o formulário de agendamento
3. Adicione imagens na galeria se necessário

### Atualizar Preços
Edite diretamente no HTML:

```html
<div class="services__price">Novo Preço</div>
```

### Adicionar Imagens na Galeria
1. Adicione a imagem na pasta `assets/`
2. Crie o card no HTML
3. Defina a categoria com `data-category`

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:

- **Desktop**: > 992px
- **Tablet**: 768px - 992px
- **Mobile**: < 768px

## 🚀 Otimizações

### Performance
- Imagens otimizadas
- CSS e JS minificados
- Lazy loading para imagens
- Debounce em eventos de scroll

### SEO
- Meta tags completas
- Estrutura semântica
- Open Graph tags
- Schema markup básico

### Acessibilidade
- Navegação por teclado
- Contraste adequado
- Textos alternativos
- ARIA labels

## 🐛 Solução de Problemas

### Imagens não carregam
- Verifique se as imagens estão na pasta `assets/`
- Confirme os nomes dos arquivos
- Teste com servidor local

### Formulários não funcionam
- Verifique o console do navegador
- Confirme se o JavaScript está carregado
- Teste a validação dos campos

### Menu mobile não abre
- Verifique se o JavaScript está ativo
- Confirme se não há conflitos de CSS
- Teste em diferentes navegadores

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

## 👩‍💻 Desenvolvimento

### Tecnologias Utilizadas
- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos e responsivos
- **JavaScript**: Funcionalidades interativas
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia

### Boas Práticas
- Código limpo e comentado
- Estrutura modular
- Nomenclatura consistente
- Performance otimizada

## 📞 Suporte

Para dúvidas ou sugestões:
- Abra uma issue no GitHub
- Entre em contacto através do site

---

**Desenvolvido com ❤️ para maquiadores profissionais** 