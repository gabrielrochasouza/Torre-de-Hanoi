<article>
        <h1>Torre de hanoi.</h1>
        <h2>Introdução.</h2>
        <p>A Torre de Hanoi é um quebra-cabeças que consiste de três varetas e um número de discos de diferentes tamanhos que podem ser encaixados em qualquer                vareta. O jogo começa com todos os discos empilhados em uma vareta, do maior (embaixo) para o menor (no topo).</p>
        <figure>
          <img
            src="https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo1/sprint4/img/torre-de-hanoi-example.png"
            alt="Torre de hanoi example."
            rel="noopener noreferrer"
          />
          <figcaption>Exemplo: Torre de hanoi.</figcaption>
        </figure>
        <p>Vocês trabalharão em duplas para criar uma versão JavaScript de uma Torre de Hanoi.</p>
        <p>O envio deve ser o trabalho realizado por você e seu colega - (não copiem a solução escrita por outra pessoa).</p>
        <section class="hilightedContet hilightedContet--warning">
          <header>
            <strong>Aviso!</strong>
          </header>
          <p>
            Esta entrega é <strong>HARD DEADLINE</strong>, ou seja, se você não
            submetê-la até o prazo de entrega, você NÃO poderá enviar após a
            data de entrega. Reveja atentamente no fim da entrega o seu tempo
            limite. Qualquer dúvida chame o seu <strong>Facilitador</strong>.
          </p>
        </section>
        <h2>Tarefa</h2>
        <p>
          O objetivo do quebra-cabeças é mover toda a pilha para outra vareta
          obedecendo às seguintes regras:
        </p>
        <ol>
          <li>
            <p>Apenas um disco pode ser movido por vez.</p>
          </li>
          <li>
            <p>
              Cada movimento consiste em pegar o disco de cima de uma das pilhas
              e movê-lo para o topo de outra pilha.
            </p>
          </li>
          <li>
            <p>Nenhum disco pode ser colocado no topo de um disco menor.</p>
          </li>
        </ol>
        <p>Lembre-se de fazer o planejamento da entrega, seja pelo notion ou trello como foi demostrado em aulas anteriores.</p>
        <h2>Passo a Passo</h2>
        <h3>1 - Preparando o repositorio</h3>
      <p>
        Para começar, faça o clone deste repositório.
      </p>
      <p>Deverá ser criado os arquivos que você achar necessários.</p>
      <h3>2 - Alterando o código</h3>
      <p>
        Para essa entrega temos um exemplo visual para ajudá-lo a entender
        melhor o funcionamento.
      </p>
      <figure>
        <img
          src="https://media.giphy.com/media/rutTKcoKSCSYM/giphy.gif"
          alt="Exemplo da torre em hanoi funcionando"
        />
        <figcaption>
          Se quiser saber mais sobre o jogo pode
          <a
            href="https://pt.wikipedia.org/wiki/Torre_de_Han%C3%B3i"
            target="_blank"
            >Acessar esse link</a
          >
        </figcaption>
      </figure>
      <section class="hilightedContet hilightedContet--warning">
        <header><strong>Aviso!</strong></header>
        <p>
          Não será permitido o uso de LIVE SHARE ou qualquer outra extensão de
          live coding em equipe, ao invés disso, tente pôr em prática seu
          conhecimento de git usando branchs.
        </p>
      </section>
        <h3>Dicas</h3>
      <p>
        Faça cada torre ser uma caixa flex que empilha elementos de baixo para
        cima usando as seguintes propriedades CSS:
      </p>
      <pre>
                <code class="language-css hljs">
    {
        display: flex; 
        flex-direction: column-reverse; 
        align-items: center;
    }
                </code>
            </pre>
      <ol>
        <li>
          Você precisa fazer o jogador clicar duas vezes para cada movimento:
          primeiro para selecionar a torre de origem, e depois para selecionar a
          torre de destino. Use uma variável para registrar qual modo o jogador
          está.
        </li>
        <li>
          Adicione um handler de clique em cada uma das três torres. Use
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget"
            target="_blank"
            rel="noopener noreferrer"
            >event.currentTarget</a
          >
          dentro do handler de evento para determinar qual torre foi clicada.
        </li>
        <li>
          Use a propriedade DOM
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Element/childElementCount"
            target="_blank"
            rel="noopener noreferrer"
          >
            childElementCount</a
          >
          para saber quantos discos estão em uma torre.
        </li>
        <li>
          Use a propriedade DOM
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Element/lastElementChild"
            target="_blank"
            rel="noopener noreferrer"
            >lastElementChild</a
          >
          para saber qual é o disco no topo da torre.
        </li>
        <li>
          Use o método DOM
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild"
            target="_blank"
            rel="noopener noreferrer"
            >appendChild()</a
          >
          para adicionar um disco a uma torre . Observe que quando você usa
          appendChild em um elemento que já tem um pai, ele é automaticamente
          removido do pai anterior e adicionado no novo.
        </li>
        <li>
          Use a propriedade
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth"
            target="_blank"
            rel="noopener noreferrer"
            >Element.clientWidth</a
          >
          para pegar o tamanho dos discos.
        </li>
      </ol>
      <section>
        <h3>Bônus:</h3>
      <section class="hilightedContet">
        <header>
          <strong>Importante!</strong>
        </header>
        <p>
          Lembrando que a função Bônus a seguir é um pouco mais avançada que a
          anterior e <strong>Não é Obrigatória</strong>
        </p>
      </section>
      <ol>
        <li>
          <strong>Contador de movimentos:</strong> Crie um contador que
          demostras quantas vezes o jogador mudou o disco de torre
        </li>
        <li>
          <strong>Função Reset:</strong> Crie uma função (um botão na aplicação)
          que reseta todos os dados, ou seja, trazer todos os dados do jogo para
          o início. Lembrando que resetar os dados diferem de dar reload na
          página. Não use reload.
        </li>
        <li>
          <strong>Mensagem de vitória:</strong> Crie uma função que quando um
          jogador ganhar apareça uma mensagem na tela demostrando quando
          completar o objetivo. Não usar Alert.
        </li>
        <li>
          <strong>Níveis de dificuldade:</strong> Crie um seletor de
          dificuldade, do mais básico (3 discos) até onde preferir, aconselhamos
          até no máximo 5 discos.
        </li>
      </ol>
<h3>3 — Finalizando o projeto</h3>
      <p>
        Faça o push do código para o seu repositório GitHub, altere a
        visibilidade do repositório para internal e implemente-o GitHub pages.
        No Canvas, por favor, envie sua url do GitHub Pages:
        <strong>(ex:https://nomerandomico.pages.github.io/)</strong>
        e envie o link do seu repositório e do trello ou notion nos comentários.
        Atenção, seu repositório deverá ser compartilhado apenas com a
        organização.
        <strong>(Internal)</strong>
      </p>
      <section class="hilightedContet hilightedContet--references">
        <header>
          <strong>Referências!</strong>
        </header>
        <ul>
          <li>
            <a href="https://rogerdudler.github.io/git-guide/index.pt_BR.html"
              >Comandos básicos de git</a
            >
          </li>
          <li>
            <a
              href="https://docs.github.com/pt/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-using-the-command-line"
              >Resolver um conflito de merge usando a linha de comando</a
            >
          </li>
          <li>
            <a
              href="https://about.gitlab.com/blog/2016/09/06/resolving-merge-conflicts-from-the-gitlab-ui/"
              >Resolving Merge Conflicts from the GitLab UI</a
            >
          </li>
        </ul>
      </section>
    </div>
