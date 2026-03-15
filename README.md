# Teacher Paloma — Site Oficial
**Premium Private English Teacher**

---

## 📁 Estrutura de Pastas

```
teacher-paloma/
│
├── index.html          ← Página principal (abra no navegador)
│
├── css/
│   └── style.css       ← Todo o visual do site (cores, fontes, layout)
│
├── js/
│   └── main.js         ← Interações (menu mobile, animações, scroll)
│
└── images/
    ├── logo.png        ← Logo "Teacher Paloma" (fundo transparente PNG)
    ├── paloma.jpg      ← Foto da professora (use JPG de boa qualidade)
    └── favicon.png     ← Ícone da aba do navegador (opcional, 32x32px)
```

---

## 🖼️ Como adicionar as imagens

1. Salve a **foto da Paloma** como `paloma.jpg` dentro da pasta `images/`
2. Salve a **logo** como `logo.png` dentro da pasta `images/`
   - ⚠️ A logo fica melhor com **fundo transparente** (arquivo PNG)
3. Pronto! O site vai carregar tudo automaticamente.

---

## ✏️ O que personalizar

### Trocar o @ do Instagram
No `index.html`, localize:
```
href="https://instagram.com/teacherpaloma"
```
Troque `teacherpaloma` pelo @ real da Paloma.

### Trocar o número do WhatsApp
Localize `5511941592390` no `index.html` e substitua se necessário.

### Mudar preços
No `index.html`, procure pela seção `<!-- PREÇOS -->` e edite os valores.

### Adicionar depoimentos reais
Procure a seção `<!-- DEPOIMENTOS -->` e edite os textos dos cards.

### Mudar cores
No `css/style.css`, edite as variáveis no topo do arquivo:
```css
:root {
  --cream:  #FAF8F5;   /* fundo geral */
  --dark:   #1A1A1A;   /* textos escuros */
  --accent: #C4A882;   /* dourado (destaque) */
  ...
}
```

---

## 🚀 Como publicar o site

### Opção 1 — Grátis com GitHub Pages
1. Crie uma conta em github.com
2. Crie um repositório chamado `teacher-paloma`
3. Faça upload de todos os arquivos
4. Vá em Settings → Pages → Branch: main → Save
5. O site ficará em: `https://seu-usuario.github.io/teacher-paloma`

### Opção 2 — Grátis com Netlify (mais fácil)
1. Acesse netlify.com e crie uma conta
2. Arraste a pasta `teacher-paloma/` inteira para o site
3. O site fica no ar em segundos com URL automática
4. Você pode conectar um domínio próprio depois

### Opção 3 — Domínio próprio
- Registre um domínio (ex: `teacherpaloma.com.br`) em registro.br ou hostgator
- Faça upload dos arquivos via FTP ou painel de hospedagem

---

## 🔧 Abrir localmente para testar
Basta dar **duplo clique** no arquivo `index.html` — ele abre direto no navegador!

---

*Site desenvolvido com HTML, CSS e JavaScript puro — sem dependências externas.*
