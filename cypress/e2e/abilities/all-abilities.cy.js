
describe('Get all abilities', () => {

    it('Geting ability', () => {
        cy.api({
            url: '/ability'
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('count', 327)
            expect(response.body.results).to.have.length(20)
        })
    });

});