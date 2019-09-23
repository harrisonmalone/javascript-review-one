const html = document.querySelector('html')
const heading = document.createElement('h1')
heading.style = "color: red;"
heading.innerHTML = "Coder Academy"
html.append(heading);

const pTag = document.createElement('p')
pTag.innerHTML = "We learn Ruby and Javascript."
html.append(pTag);

const inception = document.createElement('div')
inception.style = "background: url('https://dl.dropboxusercontent.com/s/qudmuyn8tpvyhtc/javascript_site.png'); height: 100vh"
html.append(inception);