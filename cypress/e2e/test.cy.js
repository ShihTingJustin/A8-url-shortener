/* 
使用 MongoDB & Mongoose 完成專案
程式邏輯需包括以下「例外處理」，請使用註解標註出相關段落：
輸入相同網址時，產生一樣的縮址。
若使用者沒有輸入內容，就按下了送出鈕，需要防止表單送出並提示使用者
*/

describe("template spec", () => {
  it("passes", () => {
    cy.viewport(1280, 800);
    cy.visit("");

    cy.get('[data-testid="url-input"]').should("be.visible");
    cy.get('[data-testid="url-input"]').click();
    cy.get('[data-testid="url-input"]').type("https://www.sthdev.app/");

    cy.get('[data-testid="submit-btn"]').click();

    cy.get('[data-testid="short-url"]')
      .invoke("text")
      .then((shortUrl) => {
        cy.request({ method: "GET", url: shortUrl }).then((res) => {
          expect(res.status).to.equal(200);
        });
      });
  });
});
