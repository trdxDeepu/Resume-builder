import React from 'react'
import { Form, Input, Button } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const Intrest = () => {
    return (
        <>


            <h5><b>Interest</b></h5>
            <hr />
            <Form.List name="intrest">
                {(fields, { add, remove }) => (
                    <>
                        <div className="row">
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className="col-md-4">
                                        <Form.Item
                                            {...restField}
                                            name={[name, "intrest"]}
                                            rules={[{ required: true, message: "Missing first name" }]}
                                        >
                                            <Input placeholder="Intrest" />
                                        </Form.Item>
                                    </div>
                                    <div className="col-md-2">
                                        <MinusCircleOutlined style={{ fontSize: 25, color: 'tomato' }} onClick={() => remove(name)} />
                                    </div>
                                </>
                            ))}
                        </div>

                        <Form.Item>
                            <Button
                                type="dashed"
                                onClick={() => add()}
                                block
                                icon={<PlusOutlined />}
                            >
                                Add Intrest
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>


        </>
    )
}

export default Intrest