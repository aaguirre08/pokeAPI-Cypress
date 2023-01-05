
describe('Get all egg gropups', () => {

    const eggs = [ 
        'monster', 'water1', 'bug', 'flying', 'ground', 'fairy', 'plant', 'humanshape', 'water3', 'mineral', 'indeterminate',
        'water2', 'ditto', 'dragon', 'no-eggs'
    ]

    eggs.forEach(group => {
        var initial = 1
        it('Getting egg group: ' + group, () => {
            cy.api({
                url: '/egg-group/' + group
            }).then((response) => {
                console.log(response)
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('id', initial++)
                expect(response.body).to.have.property('name', group)
                expect(response.body).to.have.property('names')
                expect(response.body).to.have.property('pokemon_species')        
            })
        });
    });
});

