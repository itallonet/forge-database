CREATE TABLE entity_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT NULL
    entity_id UUID REFERENCES entity(id),
    role_id UUID REFERENCES roles(id),
);