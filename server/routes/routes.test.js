const request = require('supertest')
const app = require('../server')

describe('Primer : No votos', () => {
    it('Primer : No votos', async () => {
      const res = await request(app)
        .post('/votacion')
        .send({
        })
      expect(res.statusCode).toEqual(200)
    })
  })

describe('Segundo: Con votos', () => {
  it('Segundo: Con votos', async () => {
    const res = await request(app)
      .post('/votacion')
      .send({
        id_punto:1,
        favor:3,
        contra:2,
        abstencion:1
      })
    expect(res.statusCode).toEqual(200)
  })
})

describe('Tercera: Actualizar a favor', () => {
    it('Tercera: Actualizar a favor', async () => {
      const res = await request(app)
        .put('/votacion')
        .send({
          id_punto:1,
          favor:10,
          contra:2,
          abstencion:1
        })
      expect(res.statusCode).toEqual(200)
    })
  })


  describe('Cuarta: Actualizar no valido', () => {
    it('Cuarta: Actualizar no valido', async () => {
      const res = await request(app)
        .put('/votacion')
        .send({
          id_punto:-1,
          favor:10,
          contra:2,
          abstencion:1
        })
      expect(res.statusCode).toEqual(200)
    })
  })

describe('Quinta: Actualizar varias', () => {
    it('Quinta: Actualizar varias favor', async () => {
    const res = await request(app)
        .put('/votacion')
        .send({
          id_punto:1,
          favor:10,
          contra:2,
          abstencion:1
        })
    expect(res.statusCode).toEqual(200)
    })

    it('Quinta: Actualizar varias contra', async () => {
      const res = await request(app)
          .put('/votacion')
          .send({
            id_punto:1,
            favor:3,
            contra:10,
            abstencion:1
          })
      expect(res.statusCode).toEqual(200)
      })

      it('Quinta: Actualizar varias abstencion', async () => {
        const res = await request(app)
            .put('/votacion')
            .send({
              id_punto:1,
              favor:3,
              contra:2,
              abstencion:10
            })
        expect(res.statusCode).toEqual(200)
        })
})