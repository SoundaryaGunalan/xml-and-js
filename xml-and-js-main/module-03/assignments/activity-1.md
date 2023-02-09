# Activity 1

```xml
<employeeList>
  <personList>
    <empID>E0000001</empID>
    <name>Sales</name>
    <name>John Smith</name>
  </personList>
  <personList>
    <empID>E0000002</empID>
    <name>Development</name>
    <name>Ichiro Tanaka</name>
  </personList>
  <personList>
    <empID>E0000003</empID>
    <name>Development</name>
    <name>Jiro Suzuki</name>
  </personList>
  <personList>
    <empID>E0000004</empID>
    <name>Administrative</name>
    <name>Saburo Takahashi</name>
  </personList>
</employeeList>
```

Resolve naming collision by adding namepsaces

- `employeeList` and `personList` - list schema
- `empId` and second `name` - employee schema
- first `name` - department schema

---

- list schema - urn:corp:list
- employee schema - urn:corp:emp
- department schema - urn:corp:dep

Save file as `module-3/asssignments/activity-1.xml`
