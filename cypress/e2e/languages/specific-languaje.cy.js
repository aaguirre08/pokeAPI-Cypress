
describe('Get a specific language', () => {

    const names = [
        {
            name: 'ja-Hrkt',
            id: 1
        },
        {
            name: 'roomaji',
            id: 2
        },
        {
            name: 'ko',
            id: 3
        },
        {       
            name: 'zh-Hant',
            id: 4
        },
        {
            name: 'fr',
            id: 5
        },
        {
            name: 'de',
            id: 6
        },
        {
            name: 'es',
            id: 7
        },
        {
            name: 'it',
            id: 8
        },
        {
            name: 'en',
            id: 9
        },
        {
            name: 'cs',
            id: 10
        },
        {
            name: 'ja',
            id: 11
        },
        {
            name: 'zh-Hans',
            id: 12
        },
        {
            name: 'pt-BR',
            id: 13
        },
    ]

    names.forEach(language => {
        it('Getting: ' + language.name, () => {
            cy.api({
                url: '/language/' + language.id
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.id).to.eq(language.id)
                expect(response.body.name).to.eq(language.name)

                if (response.body.id == 13 || response.body.id == 10) {
                    expect(response.body.official).to.eq(false)
                } else {
                    expect(response.body.official).to.eq(true)
                }
            })
        });

    });

});