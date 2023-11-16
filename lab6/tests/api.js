import { assert, expect } from 'chai';

describe('Test API', () => {
  it('get method', async () => {
    const response = await fetch('https://gorest.co.in/public/v2/users/1700725')
    const json = await response.json()
    expect(json).to.deep.equal({
      "id": 1700725,
      "name": "Bilva Agarwal",
      "email": "bilva_agarwal@tillman-oberbrunner.test",
      "gender": "male",
      "status": "active"
    })
  })
  it('post method', async () => {
    const data = {
      name: 'Tenali Ramakrishna',
      gender: 'male',
      email: 'tenali.ramakrishna@15ce.com',
      status: 'active'
    };

    const response = await fetch('https://gorest.co.in/public/v2/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ACCESS-TOKEN'
      },
      body: JSON.stringify(data)
    })
    expect(response.status).to.equal(401)
  })
})

