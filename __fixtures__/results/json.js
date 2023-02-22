const resultJson = `{
    "common": {
        "type": "nested",
        "children": {
            "follow": {
                "type": "added",
                "value": false
            },
            "setting1": {
                "type": "unchanged",
                "value": "Value 1"
            },
            "setting2": {
                "type": "removed",
                "value": 200
            },
            "setting3": {
                "type": "updated",
                "value": {
                    "key": "value"
                },
                "previusValue": true
            },
            "setting4": {
                "type": "added",
                "value": "blah blah"
            },
            "setting5": {
                "type": "added",
                "value": {
                    "key5": "value5"
                }
            },
            "setting6": {
                "type": "nested",
                "children": {
                    "doge": {
                        "type": "nested",
                        "children": {
                            "wow": {
                                "type": "updated",
                                "value": "so much",
                                "previusValue": ""
                            }
                        }
                    },
                    "key": {
                        "type": "unchanged",
                        "value": "value"
                    },
                    "ops": {
                        "type": "added",
                        "value": "vops"
                    }
                }
            }
        }
    },
    "group1": {
        "type": "nested",
        "children": {
            "baz": {
                "type": "updated",
                "value": "bars",
                "previusValue": "bas"
            },
            "foo": {
                "type": "unchanged",
                "value": "bar"
            },
            "nest": {
                "type": "updated",
                "value": "str",
                "previusValue": {
                    "key": "value"
                }
            }
        }
    },
    "group2": {
        "type": "removed",
        "value": {
            "abc": 12345,
            "deep": {
                "id": 45
            }
        }
    },
    "group3": {
        "type": "added",
        "value": {
            "deep": {
                "id": {
                    "number": 45
                }
            },
            "fee": 100500
        }
    }
}`;

export default resultJson;
