import useFetchCategories from "../useFetchCategories";
import { getCategories } from "../../api/categories";
import { test, expect, vi, afterEach } from "vitest"
import { useQuery } from "@tanstack/react-query";

const mockCategories = [
    {
        "id": 1,
        "category": "Reaction",
        "score": 80,
        "icon": "./assets/images/icon-reaction.svg"
    },
    {
        "id": 2,
        "category": "Memory",
        "score": 92,
        "icon": "./assets/images/icon-memory.svg"
    },
    {
        "id": 3,
        "category": "Verbal",
        "score": 61,
        "icon": "./assets/images/icon-verbal.svg"
    },
    {
        "id": 4,
        "category": "Visual",
        "score": 72,
        "icon": "./assets/images/icon-visual.svg"
    }
]
