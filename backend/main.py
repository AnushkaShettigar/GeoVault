from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict, Any, Optional

app = FastAPI(title="Bhu-Aadhaar DPI Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CitizenLoginRequest(BaseModel):
    identifier: str
    password: Optional[str] = None
    auth_method: Optional[str] = "password"

class OfficialLoginRequest(BaseModel):
    service_id: str
    cadre: str
    password: str
    totp: Optional[str] = None

@app.get("/api/v1/health")
def health_check() -> Dict[str, Any]:
    return {
        "status": "healthy",
        "node": "DL-GGN-094",
        "protocol": "SIH26014 Sovereign Cadastral Protocol",
        "crs": "EPSG:4326 (WGS 84)",
        "ledger_sync": "Active",
        "uptime": "99.98%"
    }

@app.post("/api/v1/auth/citizen/login")
def citizen_login(req: CitizenLoginRequest) -> Dict[str, Any]:
    return {
        "success": True,
        "token": "sovereign_jwt_citizen_8912_authenticated",
        "user": {
            "name": "Rameshwar Sharma",
            "role": "citizen",
            "title": "Citizen • Haryana",
            "aadhaar": "•••• 8912",
            "full_aadhaar": req.identifier or "5482-9901-4412",
            "state": "Haryana",
            "district": "Gurugram",
            "village": "Sohna",
            "total_parcels": 3,
            "total_area": "4.85 Acres",
            "estimated_value": "₹1.82 Cr"
        }
    }

@app.post("/api/v1/auth/official/login")
def official_login(req: OfficialLoginRequest) -> Dict[str, Any]:
    return {
        "success": True,
        "token": "sovereign_jwt_official_2024_098_fips",
        "user": {
            "name": "Vikramaditya Rao",
            "role": "official",
            "title": "Revenue Officer • Tehsildar Court",
            "service_id": req.service_id or "HR-GUR-REV-2024-098",
            "cadre": req.cadre,
            "department": "Department of Revenue & Land Records",
            "jurisdiction": "Sohna Circle, Gurugram",
            "clearance_level": "Level 3 - Cadastral Split Authority"
        }
    }

@app.get("/api/v1/parcels")
def query_parcels() -> Dict[str, Any]:
    return {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "ulpin": "58J92A41890214",
                    "owner_name": "R**** S****",
                    "area": "0.5 Hectares",
                    "status": "clear",
                    "village": "Sohna",
                    "district": "Gurugram",
                    "state": "Haryana"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [77.0266, 28.4595],
                            [77.0286, 28.4595],
                            [77.0286, 28.4615],
                            [77.0266, 28.4615],
                            [77.0266, 28.4595]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "ulpin": "58J92A41890215",
                    "owner_name": "A**** P****",
                    "area": "1.2 Hectares",
                    "status": "disputed",
                    "village": "Sohna",
                    "district": "Gurugram",
                    "state": "Haryana"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [77.0290, 28.4600],
                            [77.0310, 28.4600],
                            [77.0310, 28.4620],
                            [77.0290, 28.4620],
                            [77.0290, 28.4600]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "ulpin": "58J92A41890216",
                    "owner_name": "S**** K****",
                    "area": "0.8 Hectares",
                    "status": "encumbered",
                    "village": "Sohna",
                    "district": "Gurugram",
                    "state": "Haryana"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [77.0250, 28.4580],
                            [77.0270, 28.4580],
                            [77.0270, 28.4600],
                            [77.0250, 28.4600],
                            [77.0250, 28.4580]
                        ]
                    ]
                }
            }
        ]
    }
