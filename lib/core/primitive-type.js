import _ from 'lodash';
import Type from './type';

class PrimitiveType extends Type {
  constructor(options) {
    super(options);
  }
}

const primitiveTypes = {
  'Binary': { description: 'Binary data' },
  'Boolean': { description: 'Binary-valued logic' },
  'Byte': { description: 'Unsigned 8-bit integer' },
  'Date': { description: 'Date without a time-zone offset' },
  'DateTimeOffset': { description: 'Date and time with a time-zone offset, no leap seconds' },
  'Decimal': { description: 'Numeric values with fixed precision and scale' },
  'Double': { description: 'IEEE 754 binary64 floating-point number (15-17 decimal digits)' },
  'Duration': { description: 'Signed duration in days, hours, minutes, and (sub)seconds' },
  'Guid': { description: '16-byte (128-bit) unique identifier' },
  'Int16': { description: 'Signed 16-bit integer' },
  'Int32': { description: 'Signed 32-bit integer' },
  'Int64': { description: 'Signed 64-bit integer' },
  'SByte': { description: 'Signed 8-bit integer' },
  'Single': { description: 'IEEE 754 binary32 floating-point number (6-9 decimal digits)' },
  'Stream': { description: 'Binary data stream' },
  'String': { description: 'Sequence of UTF-8 characters' },
  'TimeOfDay': { description: 'Clock time 00:00-23:59:59.999999999999' },
  'Geography': { description: 'Abstract base type for all Geography types' },
  'GeographyPoint': { description: 'A point in a round-earth coordinate system' },
  'GeographyLineString': { description: 'Line string in a round-earth coordinate system' },
  'GeographyPolygon': { description: 'Polygon in a round-earth coordinate system' },
  'GeographyMultiPoint': { description: 'Collection of points in a round-earth coordinate system' },
  'GeographyMultiLineString': { description: 'Collection of line strings in a round-earth coordinate system' },
  'GeographyMultiPolygon': { description: 'Collection of polygons in a round-earth coordinate system' },
  'GeographyCollection': { description: 'Collection of arbitrary Geography values' },
  'Geometry': { description: 'Abstract base type for all Geometry types' },
  'GeometryPoint': { description: 'Point in a flat-earth coordinate system' },
  'GeometryLineString': { description: 'Line string in a flat-earth coordinate system' },
  'GeometryPolygon': { description: 'Polygon in a flat-earth coordinate system' },
  'GeometryMultiPoint': { description: 'Collection of points in a flat-earth coordinate system' },
  'GeometryMultiLineString': { description: 'Collection of line strings in a flat-earth coordinate system' },
  'GeometryMultiPolygon': { description: 'Collection of polygons in a flat-earth coordinate system' },
  'GeometryCollection': { description: 'Collection of arbitrary Geometry values' },
};

_.forEach(primitiveTypes, function (v, k) {
  new PrimitiveType(_.extend(v, { namespace: 'Edm', name: k }));
});

export default PrimitiveType;
