import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

export function RenderCardHomeComponent({ item }) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} className="w-100" />
            <CardBody className="card-body">
                <div class="card shadow">
                    <CardTitle tag="h3" className="card-title mb-2 text-muted text-center">{item.name}</CardTitle>
                    <CardText tag="p" className="card-text px-2">{item.description}</CardText>
                </div>
            </CardBody>
        </Card>
    );
}

export function RenderCardShopComponent({ item }) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} className="w-100" />
            <CardBody className="card-body">
                <div class="card shadow">
                    <CardTitle tag="h3" className="card-title mb-2 text-muted text-center">{item.name}</CardTitle>
                    <CardText tag="p" className="card-text px-2">{item.description}</CardText>
                </div>
            </CardBody>
        </Card>
    );
}