
describe('Get all abilities', () => {

    const abilities = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20 ]

    abilities.forEach(ability => {
        it('Getting ability: ' + ability, () => {
            cy.api({
                url: '/ability/' + ability
            }).then((response) => {
                console.log(response)
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('id', ability)
                expect(response.body).to.have.property('effect_changes')
                expect(response.body).to.have.property('effect_entries')
                expect(response.body).to.have.property('flavor_text_entries')
                expect(response.body).to.have.property('generation')
                expect(response.body).to.have.property('is_main_series', true)
                cy.log(response.body.name)
                expect(response.body).to.have.property('names')
                expect(response.body).to.have.property('pokemon')
            })
        });
    });
});
