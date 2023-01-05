
describe('Get all egg gropups', () => {

    const abilities = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20 ]


    it('Getting ability: ', () => {
        cy.api({
            url: '/egg-group'
        }).then((response) => {
            console.log(response)
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('count', 15)
            expect(response.body).to.have.property('next', null)
            expect(response.body).to.have.property('previous', null)
            expect(response.body.results).to.have.length(15)

        })
    });
});

