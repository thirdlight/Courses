const Courses = artifacts.require('Courses.sol')
contract('Courses', function () {
    let course
    let account1
    let account0
    it('sets instructors to some address so that the instructors aren\'t undefined', async function () {
        course = await Courses.new()
        await web3.eth.getAccounts().then(function(result){account1=result[1];})
        await web3.eth.getAccounts().then(function(result){account0=result[0];})
        await course.setInstructor(account0, 22, "Jane", "Doe")
        await course.setInstructor(account1, 37, "John", "Public")
        assert.notEqual(course.instructors.call(account1), undefined)
        assert.notEqual(course.instructors.call(account0), undefined)
    })
    it('shows length of instructor accounts', async function () {
        assert.equal(await course.countInstructors(), 2)
    })
    it('shows the addresses of current instructors', async function () {
        let allInstructors
        await course.getInstructors().then(i => {allInstructors = i;})
        assert.equal(allInstructors[0], account0)
        assert.equal(allInstructors[1], account1)
    })
    it('can get all the fields of each instructor', async function () {
        let account1Fields 
        let account0Fields  
        await course.getInstructor(account1).then(a => {account1Fields = a;})
        await course.getInstructor(account0).then(a => {account0Fields = a;})
        assert.equal(account1Fields[0], 37)
        assert.equal(account1Fields[1], "John")
        assert.equal(account1Fields[2], "Public")
        assert.equal(account0Fields[0], 22)
        assert.equal(account0Fields[1], "Jane")
        assert.equal(account0Fields[2], "Doe")
    })
})