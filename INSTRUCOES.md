# 🚀 Instruções Rápidas - Site Grazielly Duarte

## Como Testar o Site

### Opção 1: Abrir Diretamente
1. Navegue até a pasta do projeto
2. Clique duas vezes no arquivo `index.html`
3. O site abrirá no seu navegador padrão

### Opção 2: Usar Servidor Local (Recomendado)
1. Abra o terminal/prompt de comando
2. Navegue até a pasta do projeto
3. Execute um dos comandos:

**Python 3:**
```bash
python -m http.server 8000
```

**Node.js:**
```bash
npx http-server
```

**PHP:**
```bash
php -S localhost:8000
```

4. Abra o navegador e acesse: `http://localhost:8000`

## 📁 Estrutura dos Arquivos

```
projetoGDMAKEUP/
├── index.html          # Página principal
├── css/
│   └── style.css      # Estilos do site
├── js/
│   └── main.js        # Funcionalidades JavaScript
├── assets/            # Pasta para imagens
├── README.md          # Documentação completa
├── config.json        # Configurações do projeto
└── INSTRUCOES.md      # Este arquivo
```

## 🖼️ Imagens Necessárias

Adicione as seguintes imagens na pasta `assets/`:

- `hero-image.jpg` - Imagem principal (1200x800px)
- `about-image.jpg` - Foto da maquiadora (600x600px)
- `gallery-1.jpg` até `gallery-6.jpg` - Imagens da galeria (400x400px)
- `favicon.ico` - Ícone do site (32x32px)

## ⚙️ Personalização

### Alterar Informações de Contacto
Edite o arquivo `index.html` e procure por:
- Telefone: `+351 912 345 678`
- E-mail: `ana.silva@email.com`
- Localização: `Lisboa, Portugal`

### Alterar Cores
Edite o arquivo `css/style.css` e procure por `:root` no início do arquivo.

### Alterar Preços
Edite diretamente no arquivo `index.html` na seção de serviços.

## 🎯 Funcionalidades Testáveis

✅ **Menu Mobile** - Clique no ícone de menu em dispositivos móveis
✅ **Navegação** - Clique nos links do menu
✅ **Formulários** - Teste os formulários de agendamento e contacto
✅ **Galeria** - Use os filtros para ver diferentes categorias
✅ **Scroll Suave** - Navegue entre as seções
✅ **Responsividade** - Redimensione a janela do navegador

## 🐛 Problemas Comuns

**Imagens não aparecem:**
- Verifique se as imagens estão na pasta `assets/`
- Use um servidor local em vez de abrir diretamente

**Formulários não funcionam:**
- Verifique se o JavaScript está ativo no navegador
- Abra o console (F12) para ver erros

**Menu mobile não abre:**
- Verifique se está em uma tela pequena
- Teste em diferentes navegadores

## 📞 Suporte

Se tiver problemas:
1. Verifique se todos os arquivos estão presentes
2. Use um servidor local
3. Teste em diferentes navegadores
4. Verifique o console do navegador (F12)

---

**Site desenvolvido com HTML5, CSS3 e JavaScript puro** 