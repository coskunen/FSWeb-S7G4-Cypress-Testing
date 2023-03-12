/// <reference types="cypress" />



describe('my first E2E test', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000/')
  })

  it('ekranda 5 tane input alani', () => {
    
    cy.get('input').should('have.length', 5)

    // We can go even further and check that the default todos each contain
    // the correct text. We use the `first` and `last` functions
    // to get just the first and last matched elements individually,
    // and then perform an assertion with `should`.
   // cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
   // cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
  });

  it("isim bosken hata gorunmeli", () => {
    cy.get('[data-cy ="fname"]')
    .type("coskun")
    .clear();
    cy.get(".error").should("have.length",1);
  });


  it("Eposta boşken ve hatalı girdi olduğunda hata görünmeli", () => {
    // ilk inputu seç
    cy.get('[data-cy="femail"]')
      // içine bir şey yaz isim yaz
      .type(`berk@berk.com`)
      // sonra sil
      .clear();
    // ekrana bak .error classı olan bir adet alan olmalı
    // eposta zorunlu hatası
    cy.get(".error").should("have.length", 1);

    cy.get('[data-cy="femail"]').type(`berkber`);

    cy.get(".error").should("have.length", 1);

    // eposta hatalı hatası
    cy.get(".error").should(
      "have.text",
      "Hata: Epostanda bir hata olabilir mi?"
    );
  });

  it("parola alanı uzunluğunu test et", () => {
    cy.get('[data-cy="fpass"]')
      //3 karakter yaz
      .type("123");
    //ekranda hata mesajı görmeyi bekliyorum
    cy.get(".error").should("exist");
    //metni de bu "bla bla bla"
    cy.get(".error").should(
      "have.text",
      "Hata: bu kadar kısa olmassın en az 6 karakter :)"
    );
    //parola alanını seç
    cy.get('[data-cy="fpass"]')
      //parola yaz 6 karakter yazıyorum
      .type("123");
    //ekranda hata mesajı görmemeyi bekliyorum
    // cy.get(".error").should("not.exist");
    cy.get(".error").should("have.length", 0);
    //parola alanına tıkla
  });

  it("şartların kabulünü test et", () => {
    //Kutucuğu bul ve tıkla
    //1 kere tıkla,hata mesajı olmamalı.
    // Bir daha tıkla hata mesajı olmalı
    // Hata: Veri paylaşımı bla bla
    cy.get('[data-cy="fterms"]').click();
    cy.get(".error").should("have.length", 0);
    cy.get('[data-cy="fterms"]').click();
    cy.get(".error").should("have.length", 1);
  });
});