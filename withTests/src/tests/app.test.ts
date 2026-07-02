import request from "supertest"
import app from '../app.js'

import { describe, it, expect } from "@jest/globals"

describe("Api", () => {
    describe("GET /ping", () => {
        it('should return json with message "ping"', async() => {
            const response = await request(app)
                .get('/privet')
                .expect(200)

            expect(response.body.message).toBe("Привет");
        })
    })

    describe("GET /", () => {
        it('should return json with message undefined', async () => {
            const response = await request(app)
                .get('/p')
                .expect(404)

            expect(response.body.message).toBe(undefined);
        })
    })
})