import PersonService from '../../../src/js/services/PersonService';
import PersonRepository from '../../../src/js/repositories/PersonRepository';

const persons = [[{id:1, name:"test-a"}],[{id:2, name:"test-c"}],[{id:3, name:"test-b"}]];
const personsJSON = [{"id": 1,
                "name": "test-a"
        },
        {
                "id": 2,
                "name": "test-c"
        },
        {
                "id": 3,
                "name": "test-b"
        }
];

describe('retrieveNameById',
    () => {
        test.each(persons)(
            'given a person the name in uppercase is returned',
            async (person) => {
                let personRepository = new PersonRepository();
                let spy = jest.spyOn(personRepository, 'findById')
                    .mockImplementation(() => person);
                let personService = new PersonService(personRepository);
                let name = await personService.retrieveNameById(person.id);
                expect(spy).toHaveBeenCalledWith(person.id);
                expect(name).toBe(person.name.toUpperCase());
                spy.mockRestore();
        });
    }
);

test('findNames to return array of names all sorted',
    async () => {
        let personRepository = new PersonRepository();
        let spy = jest.spyOn(personRepository, 'find')
            .mockImplementation(() => personsJSON);
        let personService = new PersonService(personRepository);
        let names = await personService.findNames();
        let personNames = ["TEST-A", "TEST-B", "TEST-C"];
        expect(spy).toHaveBeenCalled();
        expect(names).toEqual(personNames);
    }
);
