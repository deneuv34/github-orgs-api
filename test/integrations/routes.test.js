const request = require('supertest');
const app = require('../../index');
const Comments = require('../../models/comments');

const baseUrl = '/orgs'

describe('GET /orgs/:orgs/members', () => {
  it('should return 200', async() => {
    const headers = {}

    await request(app)
      .get(`${baseUrl}/KWRI/members`)
      .set(headers)
      .expect('Content-Type', /json/)
      .expect(200);
  })

  it('should return 500 when error getting member', async() => {
    const headers = {}

    await request(app)
      .get(`${baseUrl}/ASDASDASDASDASDASD/members`)
      .set(headers)
      .expect(500);
  })
})

describe('GET /orgs/:orgs/comments', () => {
  it('should return 200', async() => {
    const headers = {}

    await request(app)
      .get(`${baseUrl}/KWRI/comments`)
      .set(headers)
      .expect('Content-Type', /json/)
      .expect(200);
  })

  it('should return 500 when error getting member', async() => {
    const headers = {}

    await request(app)
      .get(`${baseUrl}/ASDASDASDASDASDASD/members`)
      .set(headers)
      .expect(500);
  })
})

describe('POST /orgs/:orgs/comments', () => {
  it('should return 201', async() => {
    const headers = {
      'Content-Type': 'application/json'
    }

    await request(app)
      .post(`${baseUrl}/KWRI/comments`)
      .send({
        comment: 'hellow'
      })
      .set(headers)
      .expect('Content-Type', /json/)
      .expect(201);
  })

  it('should return 500 when error create comments', async() => {
    const headers = {}

    // create comment
    await request(app)
      .post(`${baseUrl}/KWRI/comments`)
      .send({
        comment: 'hellow'
      })
      .set(headers)

    await request(app)
      .get(`${baseUrl}/ASDASDASDASDASDASD/members`)
      .set(headers)
      .expect(500);
  })

  it('should return 400 when error create comments', async() => {
    const headers = {}

    // create comment
    await request(app)
      .post(`${baseUrl}/KWRI/comments`)
      .set(headers)
      .expect(400);
  })

})

describe('DELETE /orgs/:orgs/comments', () => {
  it('should return 200', async() => {
    const headers = {
      'Content-Type': 'application/json'
    }

    await request(app)
      .delete(`${baseUrl}/KWRI/comments`)
      .set(headers)
      .expect('Content-Type', /json/)
      .expect(200);

    const comments = await Comments.findAll({ where: { orgs: 'KWRI' }, raw: true })
    expect(comments.length).toEqual(0);
  })

  it('should return 500 when error delete member', async() => {
    const headers = {}

    await request(app)
      .delete(`${baseUrl}/ASDASDASDASDASDASD/comments`)
      .set(headers)
      .expect(500);
  })
});
